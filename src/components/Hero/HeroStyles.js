import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  background-color: var(--dark);
  overflow: hidden;
`;

export const Title = styled.h1`
  position: absolute;
  left: 2rem;
  top: 2rem;
  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
  background-color: transparent;

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    color: var(--offWhite);
  }

  @media screen and (max-width: 30em) {
    left: 1rem;
  }
`;

export const TextContaiiner = styled.div`
  color: var(--greyLight);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  span {
    background-image: linear-gradient(45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: var(--fontxxxl);
    padding: 0 2rem;
    text-transform: uppercase;
    font-weight: 600;
    @media screen and (max-width: 64em) {
      background-image: linear-gradient(90deg, var(--gradient));
      font-weight: 300;
      font-size: var(--fontxxl);
      padding: 5rem;
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
    filter: brightness(1.1);
  }
`;

export const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: bottom;
  }
`;
