// src/redux/createStore.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers"; // 실제 reducer 파일 경로에 맞게 변경 필요

// Redux DevTools를 사용할 경우, composeEnhancers를 사용해 연결
const composeEnhancers = 
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// store를 반환하는 함수를 export default로 내보내기
const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...[])) // 미들웨어가 있다면 추가
  );
};

export default configureStore;