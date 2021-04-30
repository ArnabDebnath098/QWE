import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, description, image,company,employer, number, site, button, button2 }) {
  return (
    <div className="card">
      <div className="cardTop">
        <img src={image} alt="background" />
      </div>
      <div className="cardBottom">
        <div className="introBox">
          <img src={company} alt="companyLogo" />
        </div>
        <div className="cardContent">
          <h2>{title}</h2>
          <p>{description}</p>
          <h5>
            Author:- <span>{employer}</span>
          </h5>
          <h5>
            Registered:- <span>{number} </span> users
          </h5>
          <div className="buttonGroup-bottom">
            <Link className="lessonButton" to="lessons">
              <button>{button2}</button>
            </Link>
            <button className="register">{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
