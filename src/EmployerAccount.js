import React from "react";
import "./EmployerAccount.css";
import Avatar from "@material-ui/core/Avatar";
import CandidateCard from "./CandidateCard";

function EmployerAccount() {
 
  return (
    <div className="employerAccount">
      <div className="employerAccount-Header">
        <div className="employerAccount-HeaderLeft">
          <Avatar className="profileImage" alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </div>
        <div className="numbers">
          <div className="count">
            <h4>0</h4>
            <p>Hired</p>
          </div>
          <div className="count">
            <h4>0</h4>
            <p>Job Post</p>
          </div>
        </div>
        <div className="employerAccount-HeaderRight">
          <h3>Company Name</h3>
          <p>Scope</p>
          <p>Profile Type: Employer</p>
        </div>
      </div>
      <h3>Hired Candidates</h3>
      <div className="hiredCandidates">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </div>
  );
}

export default EmployerAccount;
