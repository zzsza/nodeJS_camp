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