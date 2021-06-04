import React from "react";
import moment from "moment";

import Icon from "./Icon/Icon";
import Item from "./Item/Item";
import LoadingSkeleton from "./LoadingSkeleton/LoadingSkeleton";
import { capitalizeFirstLetter } from "../../utils";

import "./weather.css";

const Weather = ({ weather, icon }) => {
  if (!weather) return <LoadingSkeleton />;

  const city = weather.name;
  const country = weather.sys.country;
  const title = weather.weather[0].main;
  const description = capitalizeFirstLetter(weather.weather[0].description);
  const temp_min = weather.main.temp_min;
  const temp_max = weather.main.temp_max;
  const humidity = weather.main.humidity;
  const time = moment().format("YYYY-MM-DD hh:mm A");

  return (
    <div className="weather">
      <div className="top">
        <Item title={`${city}, ${country}`} content="" />
        <Icon icon={icon} />
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <Item title="Description:" content={description} />
        <Item title="Temperature:" content={`${temp_min}°C ~ ${temp_max}°C`} />
        <Item title="Humidity:" content={`${humidity}%`} />
        <Item title="Time:" content={time} />
      </div>
    </div>
  );
};

export default Weather;
