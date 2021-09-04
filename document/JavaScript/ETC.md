# JS Doc
## 문법
아래와 같이 주석을 정의하여 JS Doc 으로 변환할 수 있다.
```javascript
/**
*
*/
```

## Type 정의

아래와 같이 미리 Object Type을 정의하고, return 값의 Generic을 해당 Type으로 선언해보자.
사진과 같이 어떤 property를 사용할 수 있는지, 해당 type은 무엇인지 미리 확인할 수 있어 유용하다.

```javascript
/**
 * @typedef {object} User
 * @property {String} name
 * @property {String} email
 * @property {String} address
 */
 
 /**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
fetchUser().then(function(response) {
  console.log(response.address)
})
```
<img width="603" alt="스크린샷 2021-07-25 오후 12 06 11" src="https://user-images.githubusercontent.com/13659732/126886328-3ffbb051-dc46-4161-965d-a758bce3cfe3.png">

# Practice

1. VanilaJS SPA
- https://velog.io/@seeh_h/VanilaJS%EB%A1%9C-SPA-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
- https://kdydesign.github.io/2020/10/06/spa-route-tutorial/

2. VanilaJS Component
- https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#%E1%84%87%E1%85%AE%E1%84%85%E1%85%A9%E1%86%A8-%E1%84%80%E1%85%A1%E1%87%80%E1%84%8B%E1%85%B5-%E1%84%87%E1%85%A9%E1%84%86%E1%85%A7%E1%86%AB-%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%B3%E1%86%AB-%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC