import React from "react";
import { PATHS } from "../data";

function Profile() {
  return (
    <div className="flex flex-col mt-2 md:mt-5 items-center justify-center text-gray-300">
      <img
        src={PATHS.PP}
        alt=""
        className="rounded-full filter grayscale h-28 w-28 md:h-40 md:w-40 object-contain"
      />
      <span className="uppercase font-sans p-1 mt-1 md:mt-4 text-md md:text-xl font-bold ">
        mangesh khandale
      </span>
      <span className="mb-1 md:mb-3 font-serif uppercase text-sm md:text-md font-light">
        full-stack web developer
      </span>
    </div>
  );
}

export default Profile;
