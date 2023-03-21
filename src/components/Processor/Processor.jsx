import React from "react";
import { Section, Title, ProcessorImg, Text } from "./ProcessorStyles";
import { A15 } from "../../assets";

const Processor = () => {
  return (
    <Section>
      <Title>Fatest Proceessor</Title>
      <ProcessorImg>
        <img src={A15} alt="processor" />
      </ProcessorImg>
      <Text>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id autem
          voluptatem odit, voluptates magnam similique suscipit. Numquam, quo!
          Neque mollitia sint consequuntur vitae quibusdam sit non
          necessitatibus delectus nostrum accusamus.
        </span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem
          distinctio ipsam ut quae magni molestiae earum omnis, rerum tempora
          natus temporibus sint vero perspiciatis qui repellat sed at sit.
        </span>
      </Text>
    </Section>
  );
};

export default Processor;
