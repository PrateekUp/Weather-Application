import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import Temperaturedetails from "./components/Temperaturedetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./logics/weatherlogic";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "delhi" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-8 px-16 bg-gradient-to-br from-cyan-500 to-blue-600 h-fit shadow-xl shadow-gray-400 rounded-md">
      <TopButtons />
      <Inputs />
      <TimeandLocation />

      <Temperaturedetails />

      <Forecast title="hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;
