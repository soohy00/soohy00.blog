import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: ${props => props.theme.colors.bodyBackground};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    word-break: keep-all;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, 
  input, 
  textarea {
    font-family: inherit;
    border: 0;
    background: none;
    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: 'Source Code Pro', monospace;
  }

  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.border};
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 8px;
    border: 1px solid ${props => props.theme.colors.border};
  }

  pre {
    overflow-x: auto;
    padding: 16px;
    border-radius: 4px;
    background: ${props => props.theme.colors.codeBackground};
  }

  blockquote {
    margin: 16px 0;
    padding: 0 16px;
    border-left: 4px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
  }
`

export default GlobalStyles
