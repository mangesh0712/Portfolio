import React from "react";
import { useParams } from "react-router-dom";
import { COMPANIES } from "../../../data";

function Content() {
  let { company } = useParams();
  const { role, timeSpan, timeLine } = COMPANIES[company];
  
  return (
    <div className="flex flex-col ">
      <div className="text-2xl font-light">
        <span className="capitalize">{role}</span>
      </div>
      <div className="capitalize text-xs font-sans font-light">{timeSpan}</div>
      <div className="ml-4 md:ml-6 mt-3">
        <ul className="list-square">
          {timeLine.map((point, idx) => (
            <li key={idx} className="blackText">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
