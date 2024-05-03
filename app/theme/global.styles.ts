import { css } from "@emotion/react";
import normalize from "emotion-normalize";
import { mediumGrey } from "~/theme/colors";
import styled from "@emotion/styled";

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
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
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

export const Wrapper = styled.div`
  display: flex;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px 0 ${mediumGrey};
`;

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  @media (min-width: 48em) {
    position: absolute;
    left: 10rem;
  }
`;

export const Main = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.5rem;

  @media (min-width: 80em) {
    flex-wrap: nowrap;
  }
`;

export const Container = styled(Wrapper)`
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

export const WidgetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  height: 20rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 64em) {
    width: 100%;
  }
`;
