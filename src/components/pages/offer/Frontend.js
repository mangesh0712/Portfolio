import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { MY_OFFER_LIST_DATA } from "../../../data";

function Frontend() {
  return (
    <>
      <span className="subHeading text-blue-600">
        <FontAwesomeIcon icon={faEdit} size="1x" className="mr-2" />
        front-end engineering
      </span>
      <span className="mt-5 boldBlackText">
        A <span className="text-blue-600">full-stack web developer</span> with
        over <span className="text-blue-600">2 years of experience</span>.
      </span>
      <br />
      <span className=" blackText ">
        <span className="boldBlackText">
          I specialize in applications written in both React and Angular.
        </span>
        Recently I became also a huge fan of{" "}
        <span className="text-red-500">one-way data flow</span> and{" "}
        <span className="text-red-500">Redux-like </span>architecture and also
        typed languages, e.g. TypeScript.
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
        My current experience and skills in front-end includes:
      </span>

      <br />
      <ul className="list-square ml-10">
        {MY_OFFER_LIST_DATA.frontend.map((point, idx) => (
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

export default Frontend;
