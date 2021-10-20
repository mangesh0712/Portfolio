import React from "react";
import { MY_OFFER_LIST_DATA } from "../../../data";
import { Link } from "react-router-dom";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Others from "./Others";

function MyOffer() {
  return (
    <div className="pageContainer">
      <span className="pageHeading">my offer</span>
      <span className="mt-5 ">
        A <span className="boldBlackText">full-stack web developer</span> with
        over <span className="boldBlackText">2 years of experience</span>.
      </span>
      <br />
      <span className="blackText">
        <span className="boldBlackText">
          I have maintained, developed and launched multiple projects from
          scratch
        </span>
        , carrying the development of it's front-end as well as back-end codebases.
        <br />
        <br />
        My current toolset includes
        <span className="boldBlackText">
          {" "}
          ReactJs, {" "}
        </span>
         Redux, Tailwind, TypeScript, Docker and
        all the other various frameworks, libraries and technologies related to
        them.
      </span>
      <br />
      <span className="boldBlackText">
        I can help you with all the sides of your project:
      </span>

      <br />
      <ul className="ml-10 list-square">
        {MY_OFFER_LIST_DATA.keyPoints.map((point, idx) => (
          <li key={idx} className="blackText ">
            {point}
          </li>
        ))}
      </ul>
      <br />
      <span className=" border-b border-black"></span>
      <br />
      <Frontend />
      <Backend />
      <Others />
      <span className="blackText">
        If your initial thought is that I can’t be the best in everything, it's
        okay. Send the design job to someone else, and I will take care of all
        the code development, or whatever other role you see me best in. <br />
        <br /> In cases when you already have an existing team, but you would
        still use some help,{" "}
        <span className="text-blue-600 hover:underline capitalize">
          <Link to="/contacts">contact</Link>
        </span>{" "}
        me as well. I’ll fit in very quickly, I promise.
      </span>
    </div>
  );
}

export default MyOffer;
