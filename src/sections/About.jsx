import React from "react";
const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
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

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
