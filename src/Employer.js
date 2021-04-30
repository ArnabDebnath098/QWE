import React from "react";
import "./Employer.css";
import SelectionCard from "./SelectionCard";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import SearchIcon from "@material-ui/icons/Search";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Lottie from "react-lottie";
import animationData from "./lotties/Hiring isometric animation.json";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";

function Employer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="employer">
      <div className="employerheader">
        <div className="employerheader-left">
          <h1>
            Join,
            <br /> to hunt for the best Candidate for you...
          </h1>
          <p>Enroll to explore for exciting contents.</p>
          <div className="buttonGroup">
            <button>Explore</button>
            <Link to="login">
              <button className="join">join</button>
            </Link>
          </div>
        </div>
        <div className="employerheader-right">
          <Lottie options={defaultOptions} className="anime" />
        </div>
      </div>
      <div className="candidateSearch">
        <div className="search">
          <SearchIcon className="jobIcon" />{" "}
          <input type="text" placeholder="search by Skills, Company & Job Title" />
        </div>
        <div className="location">
          <MyLocationIcon className="jobIcon" /> <input type="text" placeholder=" Location" />
        </div>
        <div className="experience">
          <CalendarTodayIcon className="jobIcon" /> <input type="text" placeholder="Experience" />
        </div>

        <button>Find a match</button>
      </div>
      <div className="selectionCards">
        <div className="left">
          <div className="leftHeader">
            <h4>Filter</h4>
            <input type="text" placeholder="search by skills" />
            <h4>Specialities</h4>
            <div className="checkBox">
              <div className="checkItems">
                <input type="checkbox" />
                <label htmlFor="">Internships</label>
              </div>
              <div className="checkItems">
                <input type="checkbox" />
                <label htmlFor="">Full-Time</label>
              </div>
              <div className="checkItems">
                <input type="checkbox" />
                <label htmlFor="">Part-Time</label>
              </div>
              <div className="checkItems">
                <input type="checkbox" />
                <label htmlFor="">Freelance</label>
              </div>
            </div>
          </div>
          <div className="leftBottom">
            <button onClick={handleOpen}>
              {" "}
              <AddCircleOutlineIcon /> Add new Job
            </button>
          </div>
        </div>
        <div className="right">
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
          <SelectionCard />
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paperArticle">
            <div className="paperArticleHeader">
              <h2>Add Job</h2>

              <CloseIcon onClick={handleClose} className="close" />
            </div>
            <hr />
            <div className="form">
              <label for="jobTitle">Job Title</label>
              <input
                name="jobTitle"
                type="text"
                class="form-control"
                id="jobTitle"
                placeholder="Job Title"
              />
              <label for="company">Company Name</label>
              <input
                name="company"
                type="text"
                class="form-control"
                id="company"
                placeholder="company"
              />
              <label for="experience">Experience nedeed</label>
              <input
                name="experience"
                type="text"
                class="form-control"
                id="experience"
                placeholder="experience needed"
              />
              <label for="venue">Venue</label>
              <input name="venue" type="text" class="form-control" id="venue" placeholder="Venue" />
              <label for="salary">Salary</label>
              <input
                name="salary"
                type="text"
                class="form-control"
                id="salary"
                placeholder="salary"
              />
              <label for="jobTags">Add Tags</label>
              <textarea
                placeholder="type your requirements here"
                name="jobTags"
                id="jobTags"
                cols="30"
                rows="10"
              />
              <button>Add Post</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Employer;
