// src/redux/createStore.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"; // 실제 reducer 파일 경로에 맞게 변경 필요

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...[])) // 미들웨어가 있으면 추가
);

export default store;