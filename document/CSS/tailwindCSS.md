# TailWind CSS

- Vuetify와 같이 기존의 UI 프레임워크들은 미리 정의한 UI 컴포넌트들을 제공하고, 우리는 그 컴포넌트를 정의하여 사용하는 방식
- TailWind는 HTML 베이스에 미리 정의된 CSS 클래스들을 정의하는 방식으로 구성

## 장점
- 직접 커스터마이징하기 좋다. 
- 유지보수가 편리하다. (개별 수정이 용이)
- tailwind**components**에서 다른 개발자들이 미리 생성해둔 컴포넌트들을 참고하고 사용할 수 있다.

## 단점
- 제공해주는 컴포넌트가 제한 적이고, 추가 기능 개발이 필요하다.(Vuetify와 비교하자면, Tree)
- CSS 파일이 방대하다. (PurgeCSS를 사용하여 미사용 코드를 빌드 단계에서 제거할 수 있다고 한다.)

## 개인 견해/TODO
Vueitfy를 적용하였더니, 생각보다 파일 크기가 커서 대체할 수 있을 만한 UI 프레임워크를 찾아보았다.
요즘 대세기도 하고, 기존 HTML 베이스로 CSS 적용만 하는 형식이라고 하여, 불필요한 코드가 비교적 생기지 않을 것 같아 알아봄.
단, 추가 기능 개발이 필요한 부분이 생기고 파일 크기가 크다고하여 적용이 망설여 진다. (Vuetify도 파일 크기가 많이 크긴 하지만, 자동으로 필요한 부분만 빌드해줌)
그래도 성능 향상 및 불필요한 코드 삭제를 위하여 적용해볼 예정이다.
- 참고: Vuetify -> Tailwind 전환으로 18% 가벼워진 사례 (https://medium.com/front-end-weekly/from-vuetify-to-tailwind-a7e83284ddfc)

## Reference
- https://velog.io/@jinsu2504/tailwind-1
