import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Temperaturedetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        Rain
      </div>
      <div className="flex flex-row justify-between items-center py-6 text-white">
        <img
          alt=""
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="w-20"
        />
        <p className="text-4xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size="18" className="mr-1" />
            Real Feel:
            <span className="ml-1 font-medium ">30°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size="18" className="mr-1" />
            Humidity:
            <span className="ml-1 font-medium ">60%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size="18" className="mr-1" />
            Wind:
            <span className="ml-1 font-medium ">12 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3 text-sm">
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">6:45 AM</span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSunset />
          <p className="font-light">
            Set: <span className="font-medium ml-1">6:45 PM</span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            High: <span className="font-medium ml-1">45°</span>
          </p>
        </div>
        <p className="font-light">|</p>
        <div className="flex flex-row items-center justify-center">
          <UilSun />
          <p className="font-light">
            Low: <span className="font-medium ml-1">18°</span>
          </p>
        </div>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default Temperaturedetails;
