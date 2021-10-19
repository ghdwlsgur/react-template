const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  name: 'webpack-config',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-cheap-source-map' : 'hidden-source-map',
  entry: {
    // entry point 정의
    app: './src/index.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', 'css'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  // 최종 파일 생성
  output: {
    path: path.join(__dirname, '/dist'),
    filename: isDevelopment ? '[name].[chunkhash].js' : '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          env: {
            development: {
              plugins: [
                ['@emotion', { sourceMap: true }],
                require.resolve('react-refresh/babel'),
              ],
            },
            production: {
              plugins: ['@emotion'],
            },
          },
          plugins: [
            'react-refresh/babel',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      // css 관련 파일 처리
      {
        test: /\.css?$/,
        use: [
          !isDevelopment ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      // 이미지 처리
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[ext]?[hash]',
            limit: 25000, //  25KB
            /*
                25KB 이하인 이미지 파일은 그냥 이미지 파일을 쓰는 게 아니라 Base64 포맷을 진행해서
                이미지 자체를 데이터로 포함시키도록 처리 

                # 이미지가 외부에서 로드되는 것이 아니라 문서 자체의 데이터로 들어가 있기 때문에 로딩시간이 단축
            */
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    removeEmptyChunks: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? 'development' : 'production',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    contentBase: path.join(__dirname, '/dist'), // contentBase는 output.path와 동일해야한다.
    proxy: {
      '/api/': {
        target: 'http://localhost:8080', // 서버 주소 넣기
        changeOrigin: true,
      },
    },
    index: 'index.html',
    open: true,
    hot: true,
    compress: true,
    inline: true,
    overlay: true,
    stats: 'errors-only',
  },
};

// process.env.NODE_ENV === 'development'
if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.plugins.push(new CleanWebpackPlugin());
  config.plugins.push(new webpack.ProgressPlugin());
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
  );
  config.plugins.push(
    new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }),
  );
}
// process.env.NODE_ENV === 'production'
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  config.plugins.push(new CleanWebpackPlugin());
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
  );
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
  );
}

module.exports = config;
