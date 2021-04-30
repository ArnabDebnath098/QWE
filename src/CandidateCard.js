import React from "react";
import "./CandidateCard.css";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import Avatar from "@material-ui/core/Avatar";


function CandidateCard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="candidateCard">
      <div className="candidateCard-Header">
        <h3>
          <Avatar className="avatar" alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          Candidate Name
        </h3>
        <p>
          <span>Applied for:</span> Job Title
        </p>
      </div>
      <p>
        <span>Occupation:</span> Student
      </p>
      <div className="candidateCard-bottom">
        <button>Reject</button>
        <button onClick={handleOpen}>View details</button>
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
          <div className="paper">
            <div className="paperHeader">
              <h2 id="transition-modal-title">Candidate Name</h2>

              <CloseIcon onClick={handleClose} className="close" />
            </div>
            <hr />
            <div className="detailsContent">
              <div className="detailsContent-left">
                <h3>
                  <span>Occupation:</span> Student
                </h3>
                <div className="qualifications">
                  <h3>Educational Qualifications</h3>
                  <ul>
                    <li>
                      Secondary Educations: DPS <span>%:87</span>
                    </li>
                    <li>
                      Higher Secondary: DPS<span>%:87</span>
                    </li>
                    <li>
                      Graduation: B.Tech <span>%:87</span>
                    </li>
                  </ul>
                </div>
                <h5>
                  <span>Experience:</span> 5 years
                </h5>
                <div className="certificates">
                  <h3>Certificates</h3>
                  <ul>
                    <li>Coursera Course</li>
                    <li>Coursera Course</li>
                    <li>Coursera Course</li>
                    <li>Coursera Course</li>
                  </ul>
                </div>
              </div>
              <div className="detailsContent-right">
                <h3>Skills</h3>
                <ul>
                  <li>
                    HTML <span>8/10</span>
                  </li>
                  <li>
                    CSS<span>8/10</span>
                  </li>
                  <li>
                    JAVASCRIPT<span>8/10</span>
                  </li>
                  <li>
                    REACT<span>8/10</span>
                  </li>
                  <li>
                    BOOTSTRAP<span>8/10</span>
                  </li>
                  <li>
                    SASS<span>8/10</span>
                  </li>
                  <li>
                    ANGULAR<span>8/10</span>
                  </li>
                  <li>
                    NODEJS<span>8/10</span>
                  </li>
                </ul>
              </div>
            </div>

            <button>Accept Candidate</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CandidateCard;
