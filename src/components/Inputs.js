import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const searchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const locationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const unitsChange = (e) => {
    const selectedunit = e.currentTarget.value;
    if (units !== selectedunit) setUnits({ selectedunit });
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search..."
          className="text-black text-lg font-light p-2 w-full rounded shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size="25"
          onClick={searchClick}
          className="text-white font-medium cursor-pointer transition ease-out hover:scale-125 "
        />
        <UilLocationPoint
          size="25"
          onClick={locationClick}
          className="text-white font-medium cursor-pointer transition ease-out hover:scale-125 "
        />
      </div>
      <div className="flex flex-row items-center w-1/4 justify-center">
        <button
          name="metric"
          onClick={unitsChange}
          className="transition ease-out hover:scale-125 text-white mx-1 text-xl items-center font-medium"
        >
          °C
        </button>
        <p className="text-white mx-1items-center font-medium">|</p>
        <button
          name="imperial"
          onClick={unitsChange}
          className="text-white transition ease-out hover:scale-125 mx-1 text-xl items-center font-medium"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
