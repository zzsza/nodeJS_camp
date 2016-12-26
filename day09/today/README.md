# 로그인 + 소셜 로그인

- mongoose => userSchema ( username, password, email, gender.. ) => Model

- 회원가입, 로그인

    - 상태 (state) 를 저장할 수 있어야함!

HTTP : stateless protocal

HTTP에 상태를 전송하는 방법

1. 쿠키 ( Cookie ) : 클라이언트에 저장되는 친구

2. 세션 ( Session ) : 웹 서버에 저장되는 친구

npm 에서 express-session / cookie-parser를 검색해보면 사용법이 나와요

connect-flash 란 친구를 설치하면 메세지 전송 가능

express=messages : 메세지를 html으로 렌더링!


로그인 기능을 passportjs.org

이걸 사용

npm install --save passport passport-local passport-local-mongoose



순서 : 스키마 생성 -> 플러그인 추가 -> 모델 생성 -> export

passport 설정

불러오고 - 쿠키/세션 설정된 곳 아래에 설정 -

npm install --save passport-kakao


### passport를 이용한 소셜 로그인 방식

passport middleware를 이용하여 소셜 로그인을 구현함에 3가지만 정확히 구현하면됨!
1. Strategy의 구현
- 어떻게 유저의 권한을 획득하여 정보를 받아오고,
- 이 정보를 통해서 어떻게 사용할지(찾거나, 생성하거나)

2. 실제로 권한을 요청할 주소의 구현

3. 권한을 받은 후 callback url의 구현!