import React, { useState } from "react";
import { PROJECTS } from "../../../data";

function Projects() {
  return (
    <div className="">
      <span className="subHeading">Some Things I’ve Built</span>
      <br />
      <br />
      {PROJECTS.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  );
}

export default Projects;

const Project = ({ title, img, path, description, techUsed }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <figure className="md:flex my-4  rounded-xl p-8 md:p-0 bg-gray-50">
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-32 ${
          !isHovering && "filter"
        } grayscale h-32 w-32 transform hover:scale-105 cursor-pointer object-cover md:w-56 md:h-48 md:rounded-none rounded-fi mx-auto`}
        src={img}
        alt=""
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <div className="font-semibold capitalize text-xl">{title}</div>
        </figcaption>
        <blockquote>
          <p className="text-lg">{description}</p>
        </blockquote>
        <div className="flex flex-wrap items-center space-x-2">
          {techUsed.map((tech) => (
            <span className="highlight">{tech}</span>
          ))}
        </div>
      </div>
    </figure>
  );
};
