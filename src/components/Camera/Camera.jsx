import React, { useRef, useLayoutEffect } from "react";
import {
  Section,
  VideoOne,
  VideoTwo,
  TitleContainer,
  Title,
} from "./CameraStyles";
import { ScubaDiving, skating } from "../../assets";
import { cameraComponentTl } from "../../utils";

const Camera = () => {
  const sectionRef = useRef(null);
  const videoOneRef = useRef(null);
  const videoTwoRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    cameraComponentTl(
      sectionRef.current,
      videoOneRef.current,
      videoTwoRef.current,
      titleRef
    );
  }, []);
  return (
    <Section ref={sectionRef}>
      <VideoOne
        src={ScubaDiving}
        typeof="video/mp4"
        autoPlay
        muted
        loop
        disablePictureInPicture
        ref={videoOneRef}
      />
      <VideoTwo
        src={skating}
        typeof="video/mp4"
        autoPlay
        muted
        loop
        disablePictureInPicture
        ref={videoTwoRef}
      />
      <TitleContainer ref={titleRef}>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer>
    </Section>
  );
};

export default Camera;
