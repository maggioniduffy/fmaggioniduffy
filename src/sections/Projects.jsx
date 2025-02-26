import React, { useState } from "react";
import { myProjects } from "../constants";
import Monitor from "../components/Projects/Monitor";

const lastIndex = myProjects.length - 1;

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];
  const forward = () => {
    setselectedProjectIndex((prevIndex) => {
      return prevIndex == lastIndex ? 0 : prevIndex + 1;
    });
  };

  const backward = () => {
    setselectedProjectIndex((prevIndex) => {
      return prevIndex == 0 ? lastIndex : prevIndex - 1;
    });
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text"> My Work </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="object-cover rounded-xl w-full h-96"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {" "}
              {currentProject.title}
            </p>
            <p className="animatedText"> {currentProject.desc}</p>
            <p className="animatedText"> {currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer text-white-600 "
            >
              <p> Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3"
                alt="Go live"
              />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={backward}>
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button className="arrow-btn" onClick={forward}>
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <Monitor currentProject={currentProject} />
      </div>
    </section>
  );
};

export default Projects;
