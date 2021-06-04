import React from "react";

import IconButton from "../../IconButton/IconButton";
import searchIcon from "../../../assets/images/search.png";
import trashIcon from "../../../assets/images/trash.png";

import "./historyItem.css";

const HistoryItem = ({
  city,
  country,
  timestamp,
  index,
  handleRefetchLocation,
  handleDeleteHistory,
}) => {
  return (
    <div className="history-item-container">
      <p>{index + 1}.</p>
      <div className="history-item-details">
        <p>{`${city}, ${country}`}</p>
        <p>{timestamp}</p>
      </div>
      <div className="history-item-actions">
        <IconButton icon={searchIcon} handleClick={handleRefetchLocation} />
        <IconButton icon={trashIcon} handleClick={handleDeleteHistory} />
      </div>
    </div>
  );
};

export default HistoryItem;
