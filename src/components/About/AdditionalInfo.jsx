import React from "react";

const AdditionalInfo = () => {
  return (
    <div className="xl:col-span-2 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid3.svg"
          alt="grid-3"
          className="w-full sm:h-[266px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext"> My passion for coding </p>
          <p className="grid-subtext">
            Fullstack developer proficient with Typescript, its frameworks, and
            related tools. Keen eye for styling and detailed professional.{" "}
            <br /> <br />
            Since 2019 when I started this journey in coding I never stopped
            learning and trying to get better, passing from Java development,
            Python, Data, AI and some others tech topics.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
