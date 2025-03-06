import React from "react";

const MainInfo = () => {
  return (
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img
          src="/assets/grid1.png"
          alt="grid1"
          className="w-fit m-auto sm:h-[276px] h-fit object-container"
        />
        <div>
          <p className="grid-headtext"> Hello, I'm Faustino! </p>
          <p className="grid-subtext">
            {" "}
            <b>
              🇦🇷 24 years old full stack developer from Argentina . <br /> 📕
              Bachelor degree in CS from the National University of Comahue.{" "}
            </b>{" "}
            <br />
            <b> ✅ Fast learner. Independent worker. Team player. </b>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainInfo;
