import React, { useState, useEffect } from "react";
import { EXPERIENCE_PAGE_TABS } from "../../../data";
import { useRouteMatch, Route, Link, useHistory } from "react-router-dom";
import Content from "./Content";
import Projects from "./Projects";

function Portfolio() {
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    history.push(`${match.path}/fdc`);
    alert("f")
  }, []);

  const [activatedId, setactivatedId] = useState(1);
  return (
    <div className="pageContainer ">
      <span className="pageHeading">where i've worked</span>
      <br />
      <div className="flex flex-col md:flex-row w-full md:w-5/6 ml-3 ">
        <div className="w-full md:w-4/12  flex flex-row md:flex-col justify-evenly md:justify-start ">
          {EXPERIENCE_PAGE_TABS.map((item) => (
            <Tab
              setactivatedId={setactivatedId}
              activatedId={activatedId}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <div className="w-full md:w-8/12 md:ml-6 px-5 py-3  rounded-sm">
          <Route exact path={`${match.path}/:company`}>
            <Content />
          </Route>
        </div>
      </div>
      <br />
      <span className=" border-b border-black"></span>
      <br />
      <Projects />
    </div>
  );
}

export default Portfolio;

export const Tab = ({ title, setactivatedId, id, path, activatedId }) => {
  let match = useRouteMatch();
  const selected = id === activatedId ? true : false;
  return (
    <>
      <Link to={`${match.path}${path}`}>
        <div
          onClick={() => setactivatedId(id)}
          className={`${
            selected ? "border-black bg-gray-100" : "border-gray-100 bg-white"
          }px-3 py-3 border-b-2 md:border-l-4  md:border-b-0    hover:border-l-4 cursor-pointer hover:bg-gray-100 group ${
            selected && "bg-gray-100 "
          } px-4 md:px-0`}
        >
          <span
            className={`md:pl-3 ${
              selected ? " text-black" : "text-gray-400"
            } capitalize group-hover:text-black`}
          >
            {title}
          </span>
        </div>
      </Link>
    </>
  );
};
