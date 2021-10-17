import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function SocialSites() {
  return (
    <div className="mt-2 lg:justify-center lg:mt-7 lg:p-3 lg:ml-10 flex pb-2 ml-3 lg:inline-block">
      <span className="hidden mb-3 lg:inline-block text-gray-500 uppercase text-xs">
        get in touch
      </span>
      <div className=" text-gray-500 space-x-5">
        <SocialIcon
          path="mailto:mangeshkhandale327@gmail.com"
          icon={faEnvelope}
        />
        <SocialIcon
          path="https://github.com/mangesh0712"
          icon={faGithubSquare}
        />
        <SocialIcon
          path="https://www.linkedin.com/in/mangesh0712/"
          icon={faLinkedinIn}
        />
        <SocialIcon path="" icon={faInstagramSquare} />
      </div>
    </div>
  );
}

export default SocialSites;

const SocialIcon = ({ path, icon }) => {
  return (
    <a href={path}>
      <FontAwesomeIcon
        className="hover:text-gray-100 cursor-pointer"
        size="lg"
        icon={icon}
      />
    </a>
  );
};
