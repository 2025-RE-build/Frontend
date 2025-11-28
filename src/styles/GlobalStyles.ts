import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;   
  }

  body {
    font-family: 'Arial', 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  padding-top:0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default GlobalStyles;