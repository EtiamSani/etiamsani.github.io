import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
    <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas icons={icons} />
      </div>
  );
};

export default SectionWrapper(Tech, "");
