import React from "react";
import "./CourseApproveCard.css";

function CourseApproveCard({
  title,
  description,
  image,
  company,
  employer,
  number,
  site,
  button,
  button2,
}) {
  return (
    <div className="courseApproveCard">
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
            <button>Reject</button>

            <button className="register">Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseApproveCard;
