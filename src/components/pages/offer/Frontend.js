import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { MY_OFFER_LIST_DATA } from "../../../data";

function Frontend() {
  return (
    <>
      <span className="subHeading ">
        <FontAwesomeIcon icon={faEdit} size="1x" className="mr-2" />
        front-end engineering
      </span>
      <br />
      <span>
        <span className="boldBlackText">
          I specialize in applications written in React.
        </span>
        Recently I became also a huge fan of{" "}
        <span className="text-red-500">one-way data flow</span> and{" "}
        <span className="text-red-500">Redux-like </span>architecture and also
        typed languages, e.g. TypeScript.
        <br />
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
