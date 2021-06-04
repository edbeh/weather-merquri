import React, { useEffect, useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { fetchWeather, fetchWeatherIcon } from "./services/weather";
import { defaultCity } from "./constants";
import { capitalizeFirstLetter } from "./utils";

import ThemeContext from "./context/ThemeContext";
import AppHeader from "./components/AppHeader/AppHeader";
import Searchbar from "./components/Searchbar/Searchbar";
import Weather from "./components/Weather/Weather";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchHistory from "./components/SearchHistory/SearchHistory";

import "./app.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  const handleFetchWeather = async (city, country) => {
    try {
      setWeatherIcon(null);
      setWeather(null);
      setError(null);
      setIsLoading(true);
      const weatherData = await fetchWeather(city, country);
      setWeather(weatherData);
      setIsLoading(false);
    } catch (err) {
      setError(capitalizeFirstLetter(err.message));
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    const selectedCity = !city && !country ? defaultCity : city; // fetch defaultCity if none specified
    const selectedCountry = country ? country.value : {};

    handleFetchWeather(selectedCity || "", selectedCountry || "");
    handleClear();
  };

  const handleClear = () => {
    setCity("");
    setCountry(null);
  };

  const handleFetchIcon = async (code) => {
    const icon = await fetchWeatherIcon(code);
    setWeatherIcon(icon);
  };

  const handleRefetchLocation = async (city, country) => {
    handleFetchWeather(city, country);
  };

  const handleDeleteHistory = (uuid) => {
    const newSearchHistory = searchHistory.filter((item) => item.id !== uuid);
    setSearchHistory(newSearchHistory);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (weather) {
      const iconCode = weather.weather[0].icon;
      handleFetchIcon(iconCode);

      const historyObject = {
        id: uuidv4(),
        city: weather.name,
        country: weather.sys.country,
        timestamp: moment().format("YYYY-MM-DD hh:mm A"),
      };

      setSearchHistory([historyObject, ...searchHistory]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme === "dark" && "dark"}`}>
        <AppHeader handleThemeChange={handleChangeTheme} />
        <Searchbar
          country={country}
          city={city}
          handleCityChange={handleCityChange}
          handleCountryChange={handleCountryChange}
          handleSearch={handleSearch}
          handleClear={handleClear}
        />
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <Weather weather={weather} icon={weatherIcon} />
        )}
        <SearchHistory
          searchHistory={searchHistory}
          handleRefetchLocation={handleRefetchLocation}
          handleDeleteHistory={handleDeleteHistory}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
