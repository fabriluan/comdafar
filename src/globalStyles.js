import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle `

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    body{
        height: 100vh;
        background-color: #F5F1F5;
        color: #252428;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyles;