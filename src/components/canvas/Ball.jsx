import React, { Suspense, useMemo } from "react";

const Icon = ({ src }) => {
  return <img src={src} alt="Icon" className="w-16 h-16 m-5 sm:w-12 sm:h-12 md:w-16 md:h-16" />;
};


const BallCanvas = ({ icons }) => {
  return (
    <div className="flex flex-wrap items-center">
    {icons.map((icon, index) => (
      <Icon key={index} src={icon} />
    ))}
  </div>
  );
};

export default BallCanvas;