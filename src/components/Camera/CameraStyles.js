import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--offWhite);
  overflow: hidden;
`;

export const VideoOne = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

export const VideoTwo = styled.video`
  position: absolute;
  top: 0;
  left: 40%;
  width: 60%;
  height: auto;
  z-index: 1;

  @media screen and (max-width: 64em) {
    top: 10%;
  }

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 40%;
    right: 2rem;
  }

  @media screen and (max-width: 40em) {
    right: 5rem;
  }

  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`;

export const Title = styled.h1`
  font-size: var(--fontxxl);
  text-transform: capitalize;
  z-index: 5;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
  }
`;
