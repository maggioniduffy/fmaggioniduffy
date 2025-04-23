import React from "react";

const Stack = () => {
  return (
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid2.png"
          className="w-full sm:w-[276px] h-fit object-contain m-auto"
        />
        <div>
          <p className="grid-headtext"> Tech Stack </p>{" "}
          <p className="grid-subtext">
            {" "}
            Typescript lover 🤍, but not exclusive.{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Stack;
