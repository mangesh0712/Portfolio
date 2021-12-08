import React, { useState } from "react";
import { PATHS } from "../../data";

function AboutMe() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="pageContainer">
      <span className="pageHeading">about me</span>
      <div className="py-4 flex items-center">
        <div className="w-full md:w-3/5 mr-3 ">
          <div className="blackText bg-gray-100 p-2  shadow-md transform hover:scale-105 ">
            Hello! My name is Mangesh and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I decided to learn web development from Youtube, saying bye to
            my electical job — that taught me a lot about HTML & CSS.
          </div>
          <br />
          <span className="boldBlackText">
            When I'm not in front of a computer screen
          </span>
          , I'm probably reading books, playing football or working out.
          <br />
          <br />
          As a web developer, I enjoy bridging the gap between engineering and
          design — combining my technical knowledge with my keen eye for design
          to create a beautiful product. My goal is to always build applications
          that are scalable and efficient under the hood while providing
          engaging, pixel-perfect user experiences
          <br />
          <br />
          <span className="font-semibold">
            Here are a few technologies I’ve been working with recently
          </span>
          <br />
          <span className="mt-1"> Proficient : </span>
          <div className="flex flex-wrap items-center space-x-2">
            <span className="highlight">React</span>
            <span className="highlight">Javascript</span>
            <span className="highlight">Tailwind</span>
          </div>
          <span className="mt-1"> Familiar : </span>
          <div className="flex flex-wrap items-center space-x-2">
            <span className="highlight">NodeJs</span>
            <span className="highlight">Typescript</span>
          </div>
          <span className="mt-1"> Tools : </span>
          <div className="flex flex-wrap items-center space-x-2 ">
            <span className="highlight">Azure devops</span>
            <span className="highlight">Git</span>
            <span className="highlight">SSMS</span>
          </div>
        </div>
        <div className=" hidden md:flex md:w-2/5 p-3">
          <div className="relative w-80 h-72  transform hover:rotate-1 hover:border-blue-600 border-2 border-black">
            <img
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`absolute ${
                !isHovering ? "grayscale" : "saturate-100"
              } filter object-cover w-80 h-72 bottom-4 right-4`}
              src={PATHS.PP}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
