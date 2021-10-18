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
        <div className="w-full md:w-3/5 mr-3">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
          <br />
          <br />
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
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
            <span className="highlight">Angular</span>
            <span className="highlight">.net</span>
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
                !isHovering ? "grayscale": "saturate-100"
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
