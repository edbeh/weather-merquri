import React from "react";

import Header from "../Header/Header";
import HistoryItem from "./HistoryItem/HistoryItem";

const SearchHistory = ({
  searchHistory,
  handleRefetchLocation,
  handleDeleteHistory,
}) => {
  return (
    <div>
      <Header text="Search history" />
      {searchHistory.length === 0 && (
        <p style={{ textAlign: "center" }}>No Records</p>
      )}
      {searchHistory.map((item, i) => {
        const { id, city, country, timestamp } = item;
        return (
          <HistoryItem
            key={id}
            index={i}
            city={city}
            country={country}
            timestamp={timestamp}
            handleRefetchLocation={() => handleRefetchLocation(city, country)}
            handleDeleteHistory={() => handleDeleteHistory(id)}
          />
        );
      })}
    </div>
  );
};

export default SearchHistory;
