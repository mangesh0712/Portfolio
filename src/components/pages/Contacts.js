import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { PATHS } from "../../data";

function Contacts() {
  return (
    <div className="pageContainer">
      <span className="pageHeading">contact me</span>
      <span className="mt-5 font-sans font-normal text-lg">
        I am available for hire and open to any ideas of cooperation.
      </span>
      <div className="flex flex-col my-5">
        <ContactItems
          title="E-mail"
          address="mangeshkhandale327@gamil.com"
          icon={faEnvelope}
          path={PATHS.GMAIL}
        />
        <ContactItems
          title="Github"
          address="mangesh0712"
          icon={faGithubAlt}
          path={PATHS.GITHUB}
        />
        <ContactItems
          title="LinkedIn"
          address="mangesh0712"
          icon={faLinkedin}
          path={PATHS.LINKEDIN}
        />
      </div>
    </div>
  );
}

export default Contacts;

const ContactItems = ({ title, icon, address, path }) => {
  return (
    // rel and target blank things are for opening the link in another tab
    <a href={path} rel="noreferrer" target="_blank">
      <div className="flex items-center w-full md:w-10/12 lg:6/12 my-3">
        <span className="font-sans font-light text-md md:text-lg w-3/12 md:w-1/6 cursor-default">
          {title} :
        </span>
        <div className="w-9/12 md:w-5/6 flex items-center ">
          <FontAwesomeIcon
            className="cursor-pointer mr-2"
            size="lg"
            icon={icon}
          />
          <span className="font-sans truncate text-md font-light md:text-lg cursor-pointer hover:underline">
            {address}
          </span>
        </div>
      </div>
    </a>
  );
};
