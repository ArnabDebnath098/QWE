import React from "react";
import EmployeeJobCard from "./EmployeeJobCard";
import "./MyJobs.css";
import { Link } from "react-router-dom";

function MyJobs() {
  return (
    <div className="myJobs">
      <div className="educationHeader">
        <Link className="link6" to="/">
          <h1 className="link5">QWE</h1>
        </Link>
      </div>
      <h1>My applied jobs</h1>
      <div className="registeredCourses">
        <EmployeeJobCard
          jobTitle="Work from home Customer service representative and Call center jobs"
          companyName="PERFECT SOLUTIONS"
          location="Ahmedabad"
          experience="0-5"
          salaries="5,50,000-6,50,000"
          jobTags="Data Entry Operator and Typist, Part time, Work from Home, Online Jobs, Freelance jobs,
            Back Office jobs, Computer Operator, Fresher Jobs"
        />
        <EmployeeJobCard
          jobTitle="Hiring for the Secretary /Personal Assistant /Executive Assistant whatsapp resume & photo"
          companyName="Company Name Confidential"
          location=" Bengaluru "
          experience=" 5-12"
          salaries="2,60,000-4,50,000"
          jobTags="Job Position – Executive Assistant (Managing Director) Job Location – Bangalore Job Experience – 10 to 15 years Qualifications - Graduation Language known – Hindi, English Job Roles & responsibilities"
        />
        <EmployeeJobCard
          jobTitle="Work from home Customer service representative and Call center jobs"
          companyName="PERFECT SOLUTIONS"
          location="Ahmedabad"
          experience="0-5"
          salaries="5,50,000-6,50,000"
          jobTags="Data Entry Operator and Typist, Part time, Work from Home, Online Jobs, Freelance jobs,
            Back Office jobs, Computer Operator, Fresher Jobs"
        />
      </div>
    </div>
  );
}

export default MyJobs;
