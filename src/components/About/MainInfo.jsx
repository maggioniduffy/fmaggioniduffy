import React from "react";

const MainInfo = () => {
  return (
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid1.png"
          alt="grid1"
          className="w-full sm:h-[276px] h-fit object-container"
        />
        <div>
          <p className="grid-headtext"> Hi, I'm Faustino! </p>
          <p className="grid-subtext">
            {" "}
            With 2 years of experience ... bla bla
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainInfo;
