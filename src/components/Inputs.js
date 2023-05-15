import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
        <input
          type="text"
          placeholder="search..."
          className="text-black text-lg font-light p-2 w-full rounded shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size="25"
          className="text-white font-medium cursor-pointer transition ease-out hover:scale-125 "
        />
        <UilLocationPoint
          size="25"
          className="text-white font-medium cursor-pointer transition ease-out hover:scale-125 "
        />
      </div>
      <div className="flex flex-row items-center w-1/4 justify-center">
        <button className="text-white mx-1 text-xl items-center font-medium">
          °C
        </button>
        <p className="text-white mx-1items-center font-medium">|</p>
        <button className="text-white mx-1 text-xl items-center font-medium">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
