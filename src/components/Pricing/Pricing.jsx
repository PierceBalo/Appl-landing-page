import React, { Suspense, useRef, useContext, useEffect } from "react";
import {
  Section,
  Phone,
  Colors,
  Color,
  Container,
  Details,
  SubTitle,
  Title,
  ButtonContainer,
  Btn,
  BtnLink,
  InddicatorText,
} from "./PricingStyles";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ModelThree } from "../index";
import { ColorContext } from "../../context";

const Pricing = () => {
  const sectionRef = useRef(null);

  const { currColor, changeColorContext } = useContext(ColorContext);

  let updateColor = (color, text, rgba) => {
    const colorObj = {
      color,
      text,
      rgba,
    };
    changeColorContext(colorObj);
    sectionRef.current.style.backgroundColor = `rgba(${rgba}, 0.4)`;
  };

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `rgba(${currColor.rgba}, 0.4)`;
  }, [currColor]);
  return (
    <Container>
      <Section ref={sectionRef}>
        <Phone>
          <InddicatorText>360&deg; &#x27F2;</InddicatorText>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <ModelThree />
            </Suspense>
            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Canvas>
          <Colors>
            <Color
              color="#9BB5CE"
              onClick={() =>
                updateColor("#9BB5CE", "Sierra Blue", "155, 181, 206")
              }
            />
            <Color
              color="#F9E5C9"
              onClick={() => updateColor("#F9E5C9", "Gold", "249, 229, 201")}
            />
            <Color
              color="#505F4E"
              onClick={() =>
                updateColor("#505F4E", "Alpine Green", "80, 95, 78")
              }
            />
            <Color
              color="#574f6f"
              onClick={() =>
                updateColor("#574f6f", "Deep Purple", "87, 79, 111")
              }
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}
            />
            <Color
              color="#215E7C"
              onClick={() => updateColor("#215E7C", "Blue", "33, 94, 124")}
            />
          </Colors>
        </Phone>
      </Section>
      <Details>
        <SubTitle>Iphone</SubTitle>
        <Title>13 Pro Max</Title>
        <SubTitle>Starts at $1099 *</SubTitle>
        <ButtonContainer>
          <Btn>Buy Now</Btn>
          <BtnLink href="#">Learn More &#x2192;</BtnLink>
        </ButtonContainer>
      </Details>
    </Container>
  );
};

export default Pricing;
