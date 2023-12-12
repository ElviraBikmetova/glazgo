import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::after, *::before  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: ${({ theme }) => theme.colors.black};
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`