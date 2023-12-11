import { useState } from "react";
import Search from "./components/Search";
import { useWeather } from "./hooks/useWeather";
import Weather from "./components/Weather";
import Today from "./components/Today";

function App() {
  const [query, setQuery] = useState("Bijeljina");
  const { isLoading, weather, displayLocation } = useWeather(query);

  console.log(weather);

  return (
    <>
      <header>
        <Search location={query} setLocation={setQuery} />
      </header>

      {isLoading && <p className="loading">Loading...</p>}

      {weather.weathercode && (
        <main>
          <Today weather={weather} location={displayLocation} />
          <Weather weather={weather} />
        </main>
      )}
    </>
  );
}

export default App;
