import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { PATHS } from "../data";
import "../index.css"

function SocialSites() {
  return (
    <div className="mt-2 justify-center lg:justify-center lg:mt-7 lg:p-3 lg:ml-10 flex pb-2 ml-3 lg:inline-block">
      <span className="hidden mb-3 lg:inline-block text-gray-500 uppercase text-xs">
        get in touch
      </span>
      <div className=" text-gray-500 space-x-5 md:space-x-12 lg:space-x-5">
        <SocialIcon path={PATHS.GMAIL} icon={faEnvelope} />
        <SocialIcon path={PATHS.GITHUB} icon={faGithubSquare} />
        <SocialIcon path={PATHS.LINKEDIN} icon={faLinkedinIn} />
      </div>
    </div>
  );
}

export default SocialSites;

const SocialIcon = ({ path, icon }) => {
  return (
    <a href={path} className="navBtn">
      <FontAwesomeIcon
        className="navBtn"
        size="lg"
        icon={icon}
      />
    </a>
  );
};
