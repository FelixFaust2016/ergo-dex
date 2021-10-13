import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size:2rem ;
    }
    h3 {
        font-size: 1.5rem;
    }

`;
