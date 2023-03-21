import React, { Suspense } from "react";
import { Container } from "./PhoneStyles";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "../index";

const PhoneModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[1, 0, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
