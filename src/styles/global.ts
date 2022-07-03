import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{bg: string}>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter;
    }

    body {
        background-color: ${props => props.bg};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`

export const MediaQuery = {
    "Mobile": "@media (min-width: 768px)",
    "Tablet": "@media (min-width: 769px)",
    "Desktop": "@media (min-width: 1024px)"
}