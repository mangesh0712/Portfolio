import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { MY_OFFER_LIST_DATA } from "../../../data";

function Backend() {
  return (
    <>
      <span className="subHeading">
        <FontAwesomeIcon icon={faCode} size="1x" className="mr-2" />
        back-end engineering
      </span>
      <br />
      <span className="blackText">
        <span className="boldBlackText">
          In back-end development, my current stack involves
          <span className="text-red-500 font-normal">{" "}.Net </span>
          or
          <span className="text-red-500 font-normal">{" "}NodeJS.</span>
        </span>
        <br />
        <br />
        Nearly every app I have launched in the past had some of the back-end done also
        by me. In order to improve the development speed, performance and
        reliability, I have changed languages and frameworks already multiple
        times, from NodeJs to .Net .
        <br />
        <br />
        <span className="boldBlackText">
          I can help you with all the sides of your project:
        </span>
        <br />
        <br />
        <ul className="list-square ml-10">
          {MY_OFFER_LIST_DATA.backend.map((point, idx) => (
            <li key={idx} className="blackText ">
              {point}
            </li>
          ))}
        </ul>
        <br />
      </span>
        <span className=" border-b border-black"></span>
      <br />
    </>
  );
}

export default Backend;
