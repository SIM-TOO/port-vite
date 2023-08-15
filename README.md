# 포트폴리오 사이트 만들기 프로젝트

1. 기본설정
- vite를 설치
    - `npm create vite@latest`
- gsap를 설치
    - `npm install gsap`
- lenis를 설치
    - `npm install @studio-freight/lenis`
- vite를 설치 후 환경 설정
    - `vite.config.js`파일을 만들고 다음과 같이 작성
```javascript
export default {
    root: "src",
    build: {
    outDir: "../public",
    },
};"# port-vite"
```
