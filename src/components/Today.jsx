import { getWeatherIcon } from "../functions";

function Today({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
    uv_index_max: uv_index,
    precipitation_probability_max: prob,
    wind_speed_10m_max: wind,
  } = weather;
  return (
    <div className="today">
      <span style={{ fontSize: "10rem", padding: "0" }}>
        {getWeatherIcon(codes?.at(0))}
      </span>
      <h1>{location}</h1>
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
  );
}

export default Today;
