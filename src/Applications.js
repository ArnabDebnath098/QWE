import React from "react";
import "./Applications.css";
import CandidateCard from "./CandidateCard";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

function Applications() {
  return (
    <div className="applications">
      <div className="candidateSearch1">
        <div className="search">
          <SearchIcon className="jobIcon" />
          <input type="text" placeholder="search by skills" />
        </div>
        <div className="location">
          <MyLocationIcon className="jobIcon" /> <input type="text" placeholder=" Location" />
        </div>
        <div className="experience">
          <CalendarTodayIcon className="jobIcon" /> <input type="text" placeholder="Experience" />
        </div>

        <button>Find a match</button>
      </div>
      <div className="applicationsHeader">
        <h1>Applications of Candidate</h1>
      </div>
      <div className="applicationsbottom">
        <div className="applicationsbottom-left">
          <div className="leftHeader">
            <h4>Filter</h4>
            <input type="text" placeholder="search by skills" />
            <h4>Specialities</h4>
            <div className="checkBox">
              <div className="checkItems white">
                <input type="checkbox" />
                <label htmlFor="">Internships</label>
              </div>
              <div className="checkItems white">
                <input type="checkbox" />
                <label htmlFor="">Full-Time</label>
              </div>
              <div className="checkItems white">
                <input type="checkbox" />
                <label htmlFor="">Part-Time</label>
              </div>
              <div className="checkItems white">
                <input type="checkbox" />
                <label htmlFor="">Freelance</label>
              </div>
            </div>
          </div>
        </div>

        <div className="applicationsbottom-right">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </div>
      </div>
    </div>
  );
}

export default Applications;
