import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html 
  {
    background-color: ${props => props.theme.background};
    font-family: "JetBrains Mono", monospace;
  }
  
  body
  {
    padding: 2.5rem 1rem;
  }

  button, a, input {
    font-family: 'JetBrains Mono', monospace;
  }
`