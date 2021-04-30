import React from "react";
import "./SelectionCard.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MoneyOutlinedIcon from "@material-ui/icons/MoneyOutlined";
import { Link } from "react-router-dom";

function SelectionCard() {
  return (
    <div className="selectionCard">
      <div className="selectionCard-header">
        <div className="selectionCard-headerLeft">
          <h3>
            JOB DETAIL <span>Posted 2 days ago</span>
          </h3>
          <p>this contains job descriptions based on what they need.</p>
        </div>
        <div className="selectionCard-headerRight">
          <p>
            <MoneyOutlinedIcon className="selects" /> Salary:50,000
          </p>
          <p>
            <LocationOnOutlinedIcon className="selects" /> Mumbai
          </p>
        </div>
      </div>
      <div className="list">
        <p>No. of applications: 130</p>
      </div>
      <div className="selectionCard-bottom">
        <button className="view">Delete Job</button>
        <Link to="applications">
          <button className="view">View Applications</button>
        </Link>
      </div>
    </div>
  );
}

export default SelectionCard;
