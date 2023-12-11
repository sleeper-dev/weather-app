import Day from "./Day";

function Weather({ weather }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;
  return (
    <div>
      <ul className="weather">
        {dates?.map(
          (date, i) =>
            i !== 0 && (
              <Day
                date={date}
                max={max.at(i)}
                min={min.at(i)}
                code={codes.at(i)}
                key={date}
              />
            )
        )}
      </ul>
    </div>
  );
}

export default Weather;
