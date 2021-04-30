import React from "react";
import "./Jobs.css";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EmployeeJobCard from "./EmployeeJobCard";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Jobs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="jobs">
      <div className="jobsHeader">
        <div className="jobsHeader-Search">
          <div className="search1">
            <SearchIcon className="jobIcon" />
            <input type="text" placeholder="search by checkItems, Company & Job Title" />
          </div>
          <div className="locations">
            <MyLocationIcon className="jobIcon" /> <input type="text" placeholder=" Location" />
          </div>
          <div className="experiences">
            <CalendarTodayIcon className="jobIcon" /> <input type="text" placeholder="Experience" />
          </div>

          <button>Find a match</button>
        </div>
      </div>

      <div className="jobSection">
        <div className="jobSection-left">
          <h3>Filter your search</h3>

          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>Job Types</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkBox">
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Part-time training
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Full-time training
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Volunteering
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Temporary
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Degree placement
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Paralegal work
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Remote / online
                  </label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>Organization type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkBox">
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Corporate law firm
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Specialist law firm
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Small or medium size law firm
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Top UK Law firm
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Legal advice clinic
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Government
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Industry / In-house legal department
                  </label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>Areas of law</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="checkBox">
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Business and commercial affairs
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Dispute resolution/Civil litigation
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Commercial property
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Employment law
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Probate, wills and trusts
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Residential conveyancing
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Family law
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Personal injury, accident, medical negligence
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Pensions/insurance/tax/financial Regulation / compliance / governance
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Consumer problems / Consumer Rights
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Personal bankruptcy, personal insolvency
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Immigration
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Welfare benefits and social security rights
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Charity
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Intellectual property
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Procurement/contract law
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Public law
                  </label>
                </div>
                <div className="checkItems">
                  <input type="checkbox" />
                  <label className="labels" htmlFor="">
                    Human rights and equality legislation
                  </label>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="jobSection-right">
          <div className="jobsCard">
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
      </div>
    </div>
  );
}

export default Jobs;
