# 📝 Product-mall

<br/>

## ⚙️ 기능구현 리스트
- ✅ 사용자 스토리
  - [x] 검색어 입력
  - [x] 검색에 도움이 되는 필터를 설정
  - [x] 검색어, 필터를 통해 해당 데이터가 포함된 상품 배열을 반환/호출
  - [x] 페이지에 나타나는 상품 목록을 볼 수 있음
  - [x] 상품 목록에서 상품을 클릭 시, 상품 상세 페이지를 볼 수 있음
- 🆘 검색어 / 필터 정보 URL 형태로 동기화 (정적으로 일부를 작성하여 표현은 되나, **더 찾아보고 다시 적용예정**)
- 🆘 Infinite Scroll 구현 (구현은 하였으나, Loding이 계속 포함되는 부분 해결 중)

<br/>

## 🕹 사용방법
```
  ** client **
  1. git clone https://github.com/rnfltpgus/productmall.git
  2. cd productmall
  3. npm install or npm i
  4. npm start
```

<br/>

## 🗺 진행하며 참고한 링크 및 검색어
- [UI 색상 뽑기](https://coolors.co/ff7900-f7a15a-696969-939393-feb77b)
- [React Router](https://reactrouter.com/en/main)
- [Axios API 이용 방법](https://axios-http.com/kr/docs/req_config)
- [Thunk 이용 방법](https://redux-toolkit.js.org/api/createAsyncThunk#return-value)
- [Objects란](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [구조분해할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [useEffect 이해 여부 체크](https://overreacted.io/ko/a-complete-guide-to-useeffect/#:~:text=%EC%9D%B4%EC%A0%84%20%EC%83%81%ED%83%9C%EB%A5%BC%20%EA%B8%B0%EC%A4%80%EC%9C%BC%EB%A1%9C%20%EC%83%81%ED%83%9C%20%EA%B0%92%EC%9D%84%20%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%20%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%9D%84%20%EB%95%8C%EB%8A%94%2C%20setState%20%EC%97%90%20%ED%95%A8%EC%88%98%20%ED%98%95%ED%83%9C%EC%9D%98%20%EC%97%85%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4%20%EB%90%A9%EB%8B%88%EB%8B%A4)
- [useSearchParams 사용법](https://reactrouter.com/en/main/hooks/use-search-params)
- [Intersection Observer API 사용법](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)

<br/>

## 🚀 알게된 것과 시도
1. useSearchParams를 통해 검색어를 실시간으로 검색어에 대한 url로 감지할 수 있다는 것을 알게 되었다. 적용 후 반응을 체크해 보았고, 좀 더 알게되면 사용해 볼 예정입니다.
- url을 표현하는 방식으로 useLocation을 사용하여 진행해보려고 하였으나 전역으로 관리한 값을 useNavigate를 이용해 넣어주기로 생각하고 진행하였지만 다른 방식이 있는지 궁금함이 남아있는 것 같습니다.
2. [React Hooks를 이용할때,](https://dmitripavlutin.com/react-hooks-stale-closures/) 조심해야될 점에 대해서 다시 알게 되었습니다.
3. 우선 과제를 진행하면서 서비스의 축소판 형식으로 진행한다는 느낌을 크게 받았습니다.
- 우선 IntersectionObserver를 선택한 이유는
- getBoundingClientRect()는 문서내의 요소들에 대해서 위치와 좌표를 다시 계산하는 웹 브라우저의 프로세스이기 때문에 리플로우를 일으킬 수 있다는 글을 보기도하고 기타 무한스크롤에 관한 라이브러리를 적용하여도 되지만  IntersectionObserver API를 이용하기로 생각하였습니다.
- 그 후 과제를 진행하면서 패치 데이터를 한번에 받아온 상태를 IntersectionObserver를 어떻게 진행해야될지 고민이 많았습니다. 그러다가 배열을 만들어 슬라이스로 짜르고 하는 작업으로 진행하게 되었는데, 현재 구현한 IntersectionObserver는 스크롤의 기능은 하고 있으나 dispatch를 계속 호출하고 있는 상황이라 렌더링 부분을 해결 하지 못하였습니다.
