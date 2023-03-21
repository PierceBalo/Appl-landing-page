import React, { useRef, useLayoutEffect } from "react";
import { Container, TextContainer, TextContainerTwo } from "./DesignStyles";
import { designComponentTl } from "../../utils";

const Design = () => {
  let container = useRef(null);
  let textOne = useRef(null);
  let textTwo = useRef(null);

  useLayoutEffect(() => {
    const trigger = designComponentTl(container, textOne, textTwo);
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);
  return (
    <Container ref={container}>
      <TextContainer ref={textOne}>
        <span>Flawless Desin with Strong Durability.</span>
      </TextContainer>
      <TextContainerTwo ref={textTwo}>
        <span>Flat-edge Desin with Toughest Smart Phone Glass.</span>
      </TextContainerTwo>
    </Container>
  );
};

export default Design;
