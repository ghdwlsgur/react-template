## 실행방법

```swift
git clone https://github.com/ragnarok-forU/react-webpack-template.git     // 깃 클론
yarn install                                                              // 모듈 설치
yarn start                                                                // 실행
```

📁
📂
🗂📄
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
