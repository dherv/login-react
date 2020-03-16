import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    :root {
      --title-font: "Open Sans", Roboto, sans-serif;
      --main-font: "Open Sans", Arial, sans-serif;
      --main-background: #fff;
      --main-color-text: #212121;
      --second-color-text: #767676
    }

    // HTML Tags
    html {
      box-sizing: border-box;
      font-size: 16px;
      font-family: var(--main-font);
      line-height: 1.5
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    ol, ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      text-decoration: none
    }

    input, textarea, button, a {
      outline: none;
    }

    textarea {
      resize: none;
    }
`;
