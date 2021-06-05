import React from "react";
import PropTypes from "prop-types";

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
          handleClick={handleSearch}
          disabled={!city && !country}
        />
        <CustomButton
          text="Clear"
          handleClick={handleClear}
          disabled={!city && !country}
        />
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  handleCityChange: PropTypes.func.isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Searchbar;
