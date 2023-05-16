import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import Temperaturedetails from "./components/Temperaturedetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./logics/weatherlogic";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-8 px-16 bg-gradient-to-br from-cyan-500 to-blue-600 h-fit shadow-xl shadow-gray-400 rounded-md">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <Temperaturedetails weather={weather} />
          {/* {console.log(weather.hourly)}
          {console.log(weather.daily)} */}
          <Forecast title="hourly forecast" gems={weather.hourly} />
          <Forecast title="Daily forecast" gems={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
