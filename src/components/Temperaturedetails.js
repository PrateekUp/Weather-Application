import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../logics/weatherlogic";

function Temperaturedetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    feels_like,
    sunrise,
    sunset,
    speed,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        {details}
      </div>
      <div className="flex flex-row justify-between items-center py-6 text-white">
        <img alt="" src={iconUrlFromCode(icon)} className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size="18" className="mr-1" />
            Real Feel:
            <span className="ml-1 font-medium ">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size="18" className="mr-1" />
            Humidity:
            <span className="ml-1 font-medium ">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size="18" className="mr-1" />
            Wind:
            <span className="ml-1 font-medium ">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3 text-sm">
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            Rise:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSunset />
          <p className="font-light">
            Set:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            High:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            Low:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default Temperaturedetails;
