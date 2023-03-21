import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: var(--offWhite);
  overflow: hidden;
`;

export const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  background-color: #9bb5ce;
`;

export const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: grab;
`;

export const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 35%;
  top: 20%;

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

export const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px 0;
  border: 1px solid var(--dark);
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: var(--fontxl);
  font-family: var(--fontR);
  padding: 0.3rem;
`;

export const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 5%;
  border: none;
  outline: none;
  background-color: var(--blue);
  color: var(--offWhite);
  cursor: pointer;

  &:hover {
    opacity: 0.2;
  }
`;

export const BtnLink = styled.a`
  text-decoration: none;
  color: var(--blue);
  margin-left: 3.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const InddicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;
