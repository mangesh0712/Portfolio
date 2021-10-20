import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { MY_OFFER_LIST_DATA } from "../../../data";

function Others() {
  return (
    <>
      <span className="subHeading ">
        <FontAwesomeIcon icon={faTerminal} size="1x" className="mr-2" />
        what about dev-ops, design, ui
      </span>
      <span className="mt-5 boldBlackText">
        During my time I have created and released some websites.
      </span>
      <br />
      <span className=" blackText ">
        Thus, not only I have coded their front-end codebases, but often I also
        had to care about other things needed in a successful web application
        project:
      </span>
      <br />
      <ul className="list-square ml-10">
        {MY_OFFER_LIST_DATA.keyPoints.map((point, idx) => (
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

export default Others;
