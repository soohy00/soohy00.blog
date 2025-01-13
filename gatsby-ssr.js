/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
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
