import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import "./countrySelector.css";

function CountrySelector({ country, handleChange }) {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="country-selector-container">
      <label htmlFor="country">Country: </label>
      <Select
        className="country-selector"
        name="country"
        options={options}
        value={country}
        onChange={handleChange}
      />
    </div>
  );
}

export default CountrySelector;
