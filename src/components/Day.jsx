import { formatDay, getWeatherIcon } from "../functions";

function Day({ date, max, min, code }) {
  return (
    <li className="day">
      <div>
        <span>{getWeatherIcon(code)}</span>
      </div>
      <div>
        <p>{formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </div>
    </li>
  );
}

export default Day;
