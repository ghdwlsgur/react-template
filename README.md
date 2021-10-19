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

## package.json

프로젝트의 정보를 정의하고, 의존하는 패키지 버전 정보를 명시하는 파일 <br>

프로젝트 정보 : name, version 영역 <br>
> name: 소문자 한 단어로 이루어져야 하며 하이픈(-)과 언더스코어(_)가 포함될 수 있습니다. <br>
> version: x.x.x 형식을 따라야 하며, 작성 규칙을 시맨틱 버저닝이라고 합니다.

패키지 버전 정보 : dependencies 또는 devDependencies 영역 <br>
> 패키지 정보는 dependencies 또는 devDependencies에 작성됩니다.
> "dependencies": 프로덕션 환경에서 응용 프로그램에 필요한 패키지
> "devDependencies": 로컬 개발 및 테스트에만 필요한 패키지


|상태|단계|규칙|예시|
|:---:|:---:|:---:|:---:|
|최초 출시|새로운 제품|1.0.0 시작|1.0.0|
|이전 버전과 호환되는 버그 수정|패치|3번째 숫자를 증가|1.0.1|
|이전 버전과 호환되는 새로운 기능|마이너|가운데 숫자를 증가시키고 마지막 숫자를 0으로 만듦|1.1.0|
|이전 버전과 호환되지 않는 변경|메이저|첫번째 숫자를 1 증가시키고 가운데와 마지막 숫자를 0으로 만듦|2.0.0|


틸트(~) : 해당 패키지의 패치 레벨 변경을 허용. 마지막 숫자만 바뀌는 레벨 변경<br>
캐럿(^) : 해당 패키지의 마이너, 패치 변경을 허용. 가운데 숫자와 마지막 숫자 모두 바뀌는 레벨 변경<br>







