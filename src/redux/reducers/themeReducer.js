const initialState = {
  theme: 'light' // 초기 테마 설정
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}

export default themeReducer 