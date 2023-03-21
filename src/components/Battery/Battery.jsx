import React, { useRef, useLayoutEffect } from "react";
import { Section, Title, BatteryList } from "./BatteryStyles";
import { batteryComponentTl } from "../../utils";

const Battery = () => {
  const battery = useRef(null);
  useLayoutEffect(() => {
    batteryComponentTl(battery);
  }, []);
  return (
    <Section id="battery">
      <Title>Go All Day With A single Charge ...</Title>
      <BatteryList ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </BatteryList>
    </Section>
  );
};

export default Battery;
