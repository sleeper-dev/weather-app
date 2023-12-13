import { useState } from "react";
import Search from "./components/Search";
import { useWeather } from "./hooks/useWeather";
import Weather from "./components/Weather";
import Today from "./components/Today";
import Switch from "./components/Switch";

function App() {
  const [query, setQuery] = useState("Bijeljina");
  const [type, setType] = useState(true);
  const [tempUnit, setTempUnit] = useState(true);
  const { isLoading, weather, displayLocation } = useWeather(query, tempUnit);

  const typeS = type ? "hourly" : "daily";

  console.log("Today", weather.daily);
  console.log("Current", weather.current);
  console.log("Hourly", weather.hourly);

  return (
    <>
      <header>
        <Search location={query} setLocation={setQuery} />
      </header>

      {isLoading && <p className="loading">Loading...</p>}

      {weather.daily?.weathercode && (
        <main>
          <h1 className="location">
            Showing weather for <strong>{displayLocation}</strong>
          </h1>

          <Today weather={{ daily: weather.daily, current: weather.current }} />

          <div className="options">
            <Switch
              options={["Hourly", "Daily"]}
              value={type}
              setValue={setType}
            />
            <Switch
              options={["°C", "°F"]}
              value={tempUnit}
              setValue={setTempUnit}
            />
          </div>
          <Weather weather={weather} type={typeS} />
        </main>
      )}
    </>
  );
}

export default App;
