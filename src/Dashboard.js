import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardHeader">
        <Link to="/">
          <h1 className="link5">QWE</h1>
        </Link>
      </div>
      <div className="dashboardMiddle">
        <div className="numberCount">
          <h1>0</h1>
          <p>Jobs Applied</p>
        </div>
        <div className="numberCount color2">
          <h1>0</h1>
          <p>Courses </p>
        </div>
        <div className="numberCount color3">
          <h1>0</h1>
          <p>Articles</p>
        </div>
      </div>
      <div className="dashboardBottom">
        <h2>Candidate Name</h2>
        <h2>Experience: 3 years</h2>
        <h3>Interested field</h3>
        <div className="interested">
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="pursuing" name="status" value="pursuing" />
            <label for="pursuing">Part-time training</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="completed" name="status" value="completed" />
            <label for="completed">Full-time training</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="pursuing" name="status" value="pursuing" />
            <label for="pursuing">Volunteering</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="completed" name="status" value="completed" />
            <label for="completed">Temporary</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="pursuing" name="status" value="pursuing" />
            <label for="pursuing"> Degree placement</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="completed" name="status" value="completed" />
            <label for="completed">Paralegal work</label>
            <br />
          </div>
          <div className="radiobuttons">
            <input className="radio1" type="radio" id="pursuing" name="status" value="pursuing" />
            <label for="pursuing">Remote / online</label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
