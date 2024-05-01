import {css} from '@emotion/react';
import normalize from 'emotion-normalize';
import {mediumGrey} from "~/theme/colors";

export default css`
    ${normalize};

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        /**
         * Font size 10px on default browser settings.
         * It's used as 62.5% to adapt to changes in the browser's default font-size.
         */
        font-size: 62.5%;
    }

    html,
    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        line-height: 1.4;
        letter-spacing: 0.05rem;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        width: 100%;
        max-width: 100%;
        image-rendering: -webkit-optimize-contrast;
    }

    a {
        color: inherit;
        transition: color 0.2s ease;
        text-decoration: none;

        /*&:hover {
            color: ${mediumGrey};
        }*/
    }
`;
