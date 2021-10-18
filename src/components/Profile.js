import React from "react";
import { PP } from '../data'

function Profile() {
  return (
    <div className="flex flex-col mt-10 items-center justify-center text-gray-300">
      <img
        src={PP}
        alt=""
        className="rounded-full filter grayscale h-40 w-40 object-contain"
      />
      <span className="uppercase font-sans p-1 mt-4 text-xl font-bold ">
        mangesh khandale
      </span>
      <span className="mb-3 font-serif uppercase text-md font-light">
        full-stack web developer
      </span>
    </div>
  );
}

export default Profile;
