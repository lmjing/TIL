# Grunt, Gulp, Webpack

[TOC]

## 1. Grunt, Gulp 사용 목적?
자동화 툴(task runner)로 보통 uglify, minify, concat, compress 하는데 많이 사용된다.
Node.js에서 사용할 수 있으며, 여러 Plugin들을 활용할 수 있다.

## 2. Webpack 이란?
모듈 번들러이다. 속도가 빠르고 Browserify, task runner 등 많은 작업을 지원하여 가장 많이 사용된다.

## 3. Browserify?
Node.js 기반의 JS 코드를 브라우저에서 실행 가능하게 해줌.
즉, 브라우저에서 require을 사용 모듈을 사용할 수 있게 지원해준다.

## 4. Moudule Bundling?
![webpack](https://res.cloudinary.com/practicaldev/image/fetch/s--ot1WARcD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/39go9c6djbo45zulu9ok.png)
웹 애플리케이션을 구성하는 모든 자원들을 모듈 단위로 나누어 최소한의 파일 묶음(번들)으로 병합/압축 해줌
> 빌드 = 번들링 = 변환

### Reference
- [Grunt, Gulp, Webpack](https://eond.com/frontend/417049)
- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%97%90%EC%84%9C%EC%9D%98-%EB%AA%A8%EB%93%88)
- [[JavaScript] 번들러(Bundler)란?](https://blog.leehov.in/24)