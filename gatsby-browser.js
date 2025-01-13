import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { lightTheme } from './src/styles/theme'
import GlobalStyles from './src/components/GlobalStyles'
import createStore from "./src/redux/createStore"

const store = createStore()

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </Provider>
)