import React from "react";
import PropTypes from "prop-types";

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

HistoryItem.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleRefetchLocation: PropTypes.func.isRequired,
  handleDeleteHistory: PropTypes.func.isRequired,
};

export default HistoryItem;
