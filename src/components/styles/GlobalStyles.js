import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

`;

export default GlobalStyles;
