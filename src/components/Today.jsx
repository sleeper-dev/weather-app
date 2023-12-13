import { getWeatherIcon } from "../functions";

function Today({ weather }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
    uv_index_max: uv_index,
    precipitation_probability_max: prob,
    wind_speed_10m_max: wind,
  } = weather.daily;

  const {
    temperature_2m: temp,
    relative_humidity_2m: humidity,
    precipitation,
    weathercode,
    wind_speed_10m: currWind,
  } = weather.current;
  return (
    <div className="status">
      <div className="current">
        <span style={{ fontSize: "10rem", padding: "0" }}>
          {getWeatherIcon(weathercode)}
        </span>
        <h2>Current</h2>
        <p className="today-info">
          <span className="today-temp">
            <strong>{Math.floor(temp)}&deg;</strong>
          </span>
          <span>
            Precipitation: <strong>{precipitation}%</strong>
          </span>
          <span>
            Humidity: <strong>{humidity}%</strong>
          </span>
          <span>
            Wind: <strong>{currWind} km/h</strong>
          </span>
        </p>
      </div>

      <div className="today">
        <span style={{ fontSize: "10rem", padding: "0" }}>
          {getWeatherIcon(codes?.at(0))}
        </span>
        <h2>Today</h2>
        <p className="today-info">
          <span className="today-temp">
            {Math.floor(min?.at(0))}&deg; &mdash;
            <strong>{Math.ceil(max?.at(0))}&deg;</strong>
          </span>
          <span>
            Precipitation: <strong>{prob?.at(0)}%</strong>
          </span>
          <span>
            Wind: <strong>{wind?.at(0)} km/h</strong>
          </span>
          <span>
            UV Index: <strong>{uv_index?.at(0)}</strong>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Today;
