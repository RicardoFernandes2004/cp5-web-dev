import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonte padrão */
  body {
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;
