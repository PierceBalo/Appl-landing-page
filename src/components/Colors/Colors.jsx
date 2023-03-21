import React, {
  useRef,
  useLayoutEffect,
  Suspense,
  useContext,
  useEffect,
} from "react";
import { Section, Left, Right, Center } from "./ColorsStyles";
import { colorsComponentTl } from "../../utils";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ModelTwo } from "../index";
import { ColorContext } from "../../context";

const Colors = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);

  const { currColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    centerRef.current.innerText = currColor.text;
    centerRef.current.style.color = currColor.color;
    rightRef.current.style.backgroundColor = `rgba(${currColor.rgba}, 0.4)`;
    leftRef.current.style.backgroundColor = `rgba(${currColor.rgba}, 0.8)`;
  }, [currColor]);

  useLayoutEffect(() => {
    colorsComponentTl(
      sectionRef.current,
      leftRef.current,
      rightRef.current,
      centerRef.current,
      changeColorContext,
      currColor
    );
  }, []);
  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={centerRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight position={[1, 0, 0]} />
          <Suspense fallback={null}>
            <ModelTwo />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </Right>
    </Section>
  );
};

export default Colors;
