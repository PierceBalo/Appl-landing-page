import React, { useLayoutEffect, useRef } from "react";
import {
  Container,
  MainTitle,
  TextBlockRight,
  Title,
  Text,
  TextBlockLeft,
  TextContainer,
  MovingText,
} from "./DisplayStyles";
import { displayComponentTl } from "../../utils";

const Display = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
  useLayoutEffect(() => {
    displayComponentTl(container, textOne, textTwo);
  }, []);
  return (
    <Container>
      <MainTitle>
        Immersive <br /> Display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR Display</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quisquam impedit assumenda velit praesentium, eaque fugiat amet ad
          perferendis? Repudiandae at sunt quisquam dicta doloribus minus
          doloremque quia debitis illo.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={container}>
        <Title>Big is Better</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quisquam impedit assumenda velit praesentium, eaque fugiat amet ad
          perferendis? Repudiandae at sunt quisquam dicta doloribus minus
          doloremque quia debitis illo.
        </Text>
      </TextBlockLeft>
      <TextContainer>
        <MovingText ref={textOne}>Thougher Than Ever!</MovingText>
        <MovingText ref={textTwo}>Every Touch Matters.</MovingText>
      </TextContainer>
    </Container>
  );
};

export default Display;
