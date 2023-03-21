import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--whitesmoke);
  overflow: hidden;
`;

export const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);

  span {
    font-size: var(--fontxxxl);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }

  @media screen and (max-width: 60em) {
    span {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;

export const TextContainerTwo = styled.p`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);

  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }

  @media screen and (max-width: 60em) {
    span {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;
