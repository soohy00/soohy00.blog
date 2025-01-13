import { createStore } from 'redux'

const initialState = {
  // 여기에 초기 상태를 정의하세요
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default () => createStore(reducer, initialState)
