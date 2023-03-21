import styled from "styled-components";
export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--offWhite);
`;

export const Title = styled.h1`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-55%, -50%);
  width: 40%;
  text-transform: uppercase;
  font-size: var(--fontxxl);
  z-index: 1;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxl);

    left: 15rem;
    top: 15rem;
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontlg);
    left: 10rem;
    top: 10rem;
    width: 70%;
  }
`;

export const BatteryList = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--white);
  border: 3px solid var(--dark);
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;
  li {
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(90deg, var(--gradient));
    opacity: 0;
  }

  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 48em) {
    top: 30%;
  }
`;
