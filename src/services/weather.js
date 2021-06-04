import axios from "axios";

import { apiUrl, iconUrl } from "../constants";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city, country) => {
  try {
    const resp = await axios.get(
      `${apiUrl}?q=${city},${country}&units=metric&appid=${apiKey}`
    );
    return resp.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const fetchWeatherIcon = async (code) => {
  try {
    const resp = await axios.get(`${iconUrl}/${code}@2x.png`, {
      responseType: "arraybuffer",
    });
    const base64 = Buffer.from(resp.data, "binary").toString("base64");
    return `data:image/jpeg;base64, ${base64}`;
  } catch (err) {
    throw new Error("error fetching image");
  }
};
