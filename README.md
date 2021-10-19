## 실행방법

```swift
git clone https://github.com/ragnarok-forU/react-webpack-template.git     // 깃 클론
yarn install                                                              // 모듈 설치
yarn start                                                                // 실행
```

```bash
📦 react-webpack-template
├── 🗂 public
│   ├── 📄 favicon.png
│   └── 📄 index.html
│  
├── 🗂 src
│   ├── 📂 assests                      // 이미지 파일
│   │   ├── 📄 react.png
│   │   └── 📄 webpack.png
│   │
│   ├── 📂 components                   // view 컴포넌트
│   │   └── 📂 common                   // 공통으로 사용되는 컴포넌트 
│   │       ├── 📄 AppLayout.js
│   │       ├── 📄 Header.js
│   │       └── 📄 Footer.js
│   │
│   ├── 📂 pages                        // 라우팅시 사용될 페이지
│   │   └── 📄 Main.js
│   │
│   ├── 📂 style                        // css
│   │    ├── 📂 container
│   │    │   └── 📄 styles.js
│   │    ├── 📄 media_query.js
│   │    ├── 📄 keyframes.js
│   │    └── 📄 index.css
│   │ 
│   │ 
│   ├── 📄 App.js                       // 페이지 라우터 처리    
│   └── 📄 index.js                     // Application entry point
│
│
├── 📄 .eslintrc.js                     // 문법 규범 
├── 📄 .gitignore                       // 불필요한 파일 업로드 방지
├── 📄 .prettierrc                      // 코드 포맷팅 (코드 스타일)
├── 📄 jsconfig.json                    // clinet / server 구조에서 사용
├── 📄 package.json                     // 패키지 버전 정보 명시
└── 📄 webpack.config.js                // 웹팩 설정
``` 


## jsconfig.json
> 최상위 디렉토리가 client와 server로 구성되어야 에러가 발생하지 않습니다. <br>
src를 기본 경로로 셋팅해주는 역할을 합니다.

```javascript
{
  "compilerOptions": {
    "sourceMap": true,
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```
## .prettierrc
```javascript
{
  "arrowParens": "avoid",               // 화살표 함수 괄호 사용 방식
  "singleQuote": true,                  // 싱글 쿼테이션 사용 여부(')
  "semi": true,                         // 세미콜론 사용 여부(;)
  "bracketSpacing": true,               // 객체 리터럴에서 괄호에 공백 삽입 여부
  "useTabs": false,                     // 탭 사용 여부 
  "jsxSingleQuote": false,              // JSX에 싱글 쿼테이션 사용 여부(')
  "quoteProps": "as-needed",            // 객체 속성에 쿼테이션 적용 방식
  "tabWidth": 2,                        // 탭 너비 (2칸 띄기)
  "trailingComma": "all",               // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "printWidth": 80,                     // 줄 바꿈 할 폭 길이
  "endOfLine": "auto"                   // EoF 방식, OS별로 처리 방식이 다름
}
```


