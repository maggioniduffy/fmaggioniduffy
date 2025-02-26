import React from "react";

const AdditionalInfo = () => {
  return (
    <div className="xl:col-span-2 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid3.png"
          alt="grid-3"
          className="w-full sm:h-[266px] h-fit object-contain"
        />
        <div>
          <p className="grid-headtext"> My passion for coding </p>
          <p className="grid-subtext"> I love bla bla </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
