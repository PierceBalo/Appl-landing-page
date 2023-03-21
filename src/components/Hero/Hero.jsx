import React from "react";
import { Section, Title, TextContaiiner, VideoContainer } from "./HeroStyles";
import { inkVideoBg } from "../../assets";

const Hero = () => {
  return (
    <Section>
      <VideoContainer>
        <video
          src={inkVideoBg}
          typeof="video/mp4"
          autoPlay
          muted
          loop
          disablePictureInPicture
        />
      </VideoContainer>

      <Title>Iphone 14 Pro Max</Title>
      <TextContaiiner>
        <span>So. Cold.</span>
        <span>So. Bold.</span>
      </TextContaiiner>
    </Section>
  );
};

export default Hero;
