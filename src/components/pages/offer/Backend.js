import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { MY_OFFER_LIST_DATA } from "../../../data";

function Backend() {
  return (
    <>
      <span className="subHeading text-blue-600">
        <FontAwesomeIcon icon={faCode} size="1x" className="mr-2" />
        back-end engineering
      </span>
      <span className="mt-5 boldBlackText">
        A <span className="text-blue-600">full-stack web developer</span> with
        over <span className="text-blue-600">2 years of experience</span>.
      </span>
      <br />
      <span className=" blackText ">
        <span className="boldBlackText">
          I have maintained, developed and launched multiple projects from
          scratch
        </span>
        , carrying the development of its' back-end and front-end codebases.
        <br />
        <br />
        My current toolset includes
        <span className="boldBlackText">
          {" "}
          Elixir Language & Phoenix Framework
        </span>
        , Ruby & Ruby on Rails, React, Redux, Angular, TypeScript, Docker and
        all the other various frameworks, libraries and technologies related to
        them.
      </span>
      <br />
      <span className="boldBlackText">
        I can help you with all the sides of your project:
      </span>

      <br />
      <ul className="list-square ml-10">
        {MY_OFFER_LIST_DATA.backend.map((point, idx) => (
          <li key={idx} className="blackText ">
            {point}
          </li>
        ))}
      </ul>
      <br />
      <span className=" border-b border-black"></span>
      <br />
    </>
  );
}

export default Backend;
