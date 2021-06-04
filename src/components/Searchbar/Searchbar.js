import React from "react";

import InputField from "../InputField/InputField";
import CountrySelector from "../CountrySelector/CountrySelector";
import CustomButton from "../CustomButton/CustomButton";

import "./searchbar.css";

const Searchbar = ({
  country,
  city,
  handleCityChange,
  handleCountryChange,
  handleSearch,
  handleClear,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="searchbar">
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <InputField
            label="City: "
            name="city"
            type="text"
            value={city || ""}
            onChange={handleCityChange}
            required
          />
        </form>
        <CountrySelector country={country} handleChange={handleCountryChange} />
      </div>

      <div className="button-group">
        <CustomButton
          text="Search"
          onClick={handleSearch}
          disabled={!city && !country}
        />
        <CustomButton
          text="Clear"
          onClick={handleClear}
          disabled={!city && !country}
        />
      </div>
    </div>
  );
};

export default Searchbar;
