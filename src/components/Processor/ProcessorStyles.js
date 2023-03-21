import styled, { keyframes } from "styled-components";

export const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--offWhite);
}
50%{
    box-shadow: 2px 2px 25px var(--offWhite);
}
100%{
    box-shadow: 1px 1px 10px var(--offWhite);
}
`;

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
  color: var(--offWhite);
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontxxl);
  font-family: var(--fontL);
  z-index: 1;
  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

export const ProcessorImg = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${glow} 3s ease-in infinite;
  padding: 0.5rem;

  img {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 70em) {
    z-index: 5;
  }

  @media screen and (max-width: 40em) {
    display: none;
  }
`;

export const Text = styled.div`
  font-size: var(---fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    margin: 0.2rem 0;
    padding: 2rem;
  }

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;
