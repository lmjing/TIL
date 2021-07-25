> 개발 중 참고하기 위한 ref만 우선 정리해둠.

# JWT
https://velopert.com/2389

# Oauth
## Refresh Token
토큰 갱신 시 필요
- [정리 문서](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
- [예시](https://auth0.com/docs/tokens/refresh-tokens/get-refresh-tokens)
- [인증 과정](https://tansfil.tistory.com/59)

-  access_token 보다 긴 만료시간을 가지고 있어, access_token만료 시 해당 refresh_token을 보내 새로운 token을 발급받는다.
-  갱신 시 refresh_token 재발급 여부는 케이스에 따라 상이하다.
-  로직: 보통 access_token 변조 확인 후, DB에 저장해둔 refresh_token과 전달 받은 정보를 비교한 후에 만료 시간이 지나지 않은 경우 발급

## ETC
- [Vue Auth0](https://auth0.com/blog/complete-guide-to-vue-user-authentication/)\
- [Authentication vs Authorization](https://auth0.com/intro-to-iam/authentication-vs-authorization/)
- [java / jjwt library](https://bamdule.tistory.com/123)
