import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #A5C9CA;
    font-family: 'Poppins', sans-serif;
   }
` 