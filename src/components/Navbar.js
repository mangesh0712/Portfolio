import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NAVBAR_DATA } from "../data";

function Navbar() {
  const [activatedId, setactivatedId] = useState(1);
  return (
    <div className="flex flex-row justify-center space-x-2 sm:space-x-4 lg:space-x-0 lg:space-y-8  lg:mt-6 lg:ml-10 lg:flex-col  uppercase  lg:p-3">
      {NAVBAR_DATA.map((item) => (
        <NavItem
          setactivatedId={setactivatedId}
          activatedId={activatedId}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default Navbar;

export const NavItem = ({ title, path, id, activatedId, setactivatedId }) => {
  const selected = id === activatedId ? true : false;
  return (
    <>
      <Link to={path} className={`${selected ? "pointer-events-none" : ""}`}>
        <div
          onClick={() => setactivatedId(id)}
          className={`${
            selected ? "text-gray-100 cursor-not-allowed" : "text-gray-500"
          } hover:text-gray-100 group transform `}
        >
          <span className="text-sm md:text-md">{title}</span>
          <FontAwesomeIcon
            className={`ml-3 ${
              selected ? "text-gray-100" : "text-gray-500"
            } hover:text-gray-100 ml-3 hidden lg:inline-block text-transparent group-hover:text-gray-100`}
            icon={faChevronRight}
            size="sm"
          />
        </div>
      </Link>
    </>
  );
};
