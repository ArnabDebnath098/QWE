import React from "react";
import CardInAccnt from "./CardInAccnt";
import "./MyArticles.css";
import { Link } from "react-router-dom";

function MyArticles() {
  return (
    <div className="myArticles">
      <div className="educationHeader">
        <Link className="link6" to="/">
          <h1 className="link5">QWE</h1>
        </Link>
      </div>
      <h1>Articles</h1>
      <div className="registeredCourses">
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
        <CardInAccnt />
      </div>
    </div>
  );
}

export default MyArticles;
