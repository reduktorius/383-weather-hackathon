import css from "./card.module.css";

import React from "react";

function Card({ dailyForecast }) {
  const optionsDay = { weekday: "long" };
  const optionsMonth = { month: "long" };
  
  const fullDay = new Intl.DateTimeFormat("en-GB", optionsDay).format(
    dailyForecast.dt * 1000
  );
  const shortDay = new Date(dailyForecast.dt * 1000).getDate();
  const fullMonth = new Intl.DateTimeFormat("en-GB", optionsMonth).format(
    dailyForecast.dt * 1000
  );

  const iconURL = `http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`;

  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <h2>{fullDay}</h2>
        <h2 className={css.date}>{shortDay} {fullMonth}</h2>
      </div>
      <p className={css.forecast}>{dailyForecast.weather[0].description}</p>
      <div className={css.cardWeatherInfo}>
        <p className={css.temperature}>
          {Math.round(dailyForecast.temp.day)}°C
        </p>
        <div className={css.minmax}>
          <p>Max: {dailyForecast.temp.max}</p>
          <p>Min: {dailyForecast.temp.min}</p>
        </div>
        <img src={iconURL} alt="weatherIcon" className={css.icon}></img>
      </div>
    </div>
  );
}

export default Card;
