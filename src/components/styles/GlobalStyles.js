import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`

  :root {
    --heroFont: 'Bungee', cursive;
    --mainFont: 'Quicksand', sans-serif;
    --yellow: #F5CB5C;
    --lightGreen: #E8EDDF;
    --darkGreen: #CFDBD5;
    --black: #242423;
    --white: #F8F5F5;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: var(--mainFont);
  }

  body {
    background-color: var(--white);
  }


`;

export default GlobalStyles;
