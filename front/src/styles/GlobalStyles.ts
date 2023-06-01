import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        --primary-color: #2D2D2D;
        --grey-600: #3C3C3C;
        --grey-300: #787878;
        --red-800: #A60512;
        --red-500: #D90718;
        --red-300: #D9644A;
        --green: #318C22;
        --blue: #0085FF;
        --yellow: #dfc900;
    }

    html {
        background-color: var(--primary-color);
        color: #FFFFFF;
    }


    button {
        cursor: pointer;
        border: 0;
        transition: all .3s;
    }

    input {
        outline: 0;
    }

    textarea {
        font-family: 'Inter', sans-serif;
        overflow-y: auto;
        outline: 0;
        border: none;
        resize: none;
    }

    .Toastify {
        font-size: 1.4rem;
    }
`;

export default GlobalStyles;
