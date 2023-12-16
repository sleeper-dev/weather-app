import { useEffect, useState } from "react";

export function useWeather(query, tempUnit) {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [displayLocation, setDisplayLocation] = useState({
    locationName: "",
    countryCode: "",
  });

  const temp = tempUnit ? "celsius" : "fahrenheit";

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchWeather() {
        if (query.length < 2) return;
        try {
          setIsLoading(true);
          // 1) Getting location (geocoding)
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
          );
          const geoData = await geoRes.json();
          console.log(geoData);

          if (!geoData.results) throw new Error("Location not found");

          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);
          setDisplayLocation({
            locationName: `${name}`,
            countryCode: country_code,
          });

          // 2) Getting actual weather
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weathercode,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weathercode,wind_speed_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max,wind_speed_10m_max&temperature_unit=${temp}&forecast_hours=12`
          );
          const weatherData = await weatherRes.json();
          setWeather({
            current: weatherData.current,
            hourly: weatherData.hourly,
            daily: weatherData.daily,
          });
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }

      fetchWeather();

      return function () {
        controller.abort();
      };
    },
    [query, temp]
  );
  return { isLoading, weather, displayLocation };
}
