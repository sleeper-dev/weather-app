import {
  formatDate,
  formatDay,
  formatHours,
  getWeatherIcon,
} from "../functions";
import WeatherList from "./WeatherList";

function Weather({ weather, type }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    uv_index_max: dailyUV,
    precipitation_probability_max: dailyPrecipitation,
    wind_speed_10m_max: dailyWind,
    time: dates,
    weathercode: codes,
  } = weather.daily;

  const {
    temperature_2m: temp,
    relative_humidity_2m: humidity,
    apparent_temperature: feel,
    precipitation_probability: hourlyPrecipitation,
    weathercode,
    wind_speed_10m: hourlyWind,
    uv_index: hourlyUV,
    time: hours,
  } = weather.hourly;

  return (
    <div>
      <ul className="weather">
        {type === "daily" &&
          dates?.map(
            (date, i) =>
              i !== 0 && (
                <WeatherList>
                  <div>
                    <span>
                      <strong>{formatDay(date)}</strong>
                    </span>
                    <span>{formatDate(date)}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "3rem" }}>
                      <strong>{Math.ceil(max.at(i))}&deg;</strong>
                    </span>
                    <span>{Math.floor(min.at(i))}&deg;</span>
                  </div>
                  <div>
                    <span className="icon">{getWeatherIcon(codes.at(i))}</span>
                  </div>
                  <div className="details">
                    <span>
                      Precipitation:{" "}
                      <strong>{Math.ceil(dailyPrecipitation.at(i))}%</strong>
                    </span>
                    <span>
                      UV Index: <strong>{dailyUV?.at(i)}</strong>
                    </span>
                    <span>
                      Wind: <strong>{dailyWind?.at(i)} km/h</strong>
                    </span>
                  </div>
                </WeatherList>
              )
          )}
        {type === "hourly" &&
          hours?.map((hour, i) => (
            <WeatherList>
              <div>
                <span>
                  <strong>{formatHours(hour)}</strong>
                </span>
              </div>
              <div>
                <span style={{ fontSize: "3rem" }}>
                  <strong>{Math.ceil(temp.at(i))}&deg;</strong>
                </span>
                <span>Feel {feel.at(i)}&deg;</span>
              </div>
              <div>
                <span className="icon">
                  {getWeatherIcon(weathercode.at(i))}
                </span>
              </div>
              <div className="details">
                <span>
                  Precipitation:{" "}
                  <strong>{Math.ceil(hourlyPrecipitation.at(i))}%</strong>
                </span>
                <span>
                  Humidity: <strong>{humidity.at(i)}%</strong>
                </span>
                <span>
                  UV Index: <strong>{hourlyUV.at(i)}</strong>
                </span>
                <span>
                  Wind: <strong>{hourlyWind.at(i)} km/h</strong>
                </span>
              </div>
            </WeatherList>
          ))}
      </ul>
    </div>
  );
}

export default Weather;
