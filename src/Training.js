import React from "react";
import "./Training.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import Card from "./Card";
import SearchIcon from "@material-ui/icons/Search";

function Training() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="training">
      <div className="jobsHeader-Search">
        <div className="search1">
          <SearchIcon className="jobIcon" />
          <input type="text" placeholder="search topic" />
        </div>

        <button>Find a match</button>
      </div>
      <div className="trainingHeader">
        <div className="trainingHeader-left">
          <h1>Trainings & courses</h1>
          <p>It will help you to achieve your goals.</p>
        </div>
        <div className="trainingHeader-right" onClick={handleOpen}>
          <p>Add Courses</p>
          <AddCircleOutlineIcon className="add" />
        </div>
      </div>
      <div className="courses">
        <Card
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/10B7B/production/_107157486_students8.jpg"
          company="http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="Google"
          number="5"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg"
          company="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/01104757/University-of-California-Berkeley-400x400.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="UCI"
          number="10"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://eitrawmaterials.eu/wp-content/uploads/2019/05/Label-brochure-1.jpg"
          company="https://cloudfront-us-east-1.images.arcpublishing.com/gray/P6BYIPB64BOTTLTNEQPND5SI6A.jpg"
          title="Python Programming"
          description="This is a python programming course designed for complete beginners. "
          employer="Michigan University"
          number="2"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/10B7B/production/_107157486_students8.jpg"
          company="http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="Google"
          number="5"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg"
          company="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/01104757/University-of-California-Berkeley-400x400.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="UCI"
          number="10"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://eitrawmaterials.eu/wp-content/uploads/2019/05/Label-brochure-1.jpg"
          company="https://cloudfront-us-east-1.images.arcpublishing.com/gray/P6BYIPB64BOTTLTNEQPND5SI6A.jpg"
          title="Python Programming"
          description="This is a python programming course designed for complete beginners. "
          employer="Michigan University"
          number="2"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/10B7B/production/_107157486_students8.jpg"
          company="http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="Google"
          number="5"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg"
          company="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/01104757/University-of-California-Berkeley-400x400.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="UCI"
          number="10"
          button2="Lessons"
          button="Register"
        />
        <Card
          image="https://eitrawmaterials.eu/wp-content/uploads/2019/05/Label-brochure-1.jpg"
          company="https://cloudfront-us-east-1.images.arcpublishing.com/gray/P6BYIPB64BOTTLTNEQPND5SI6A.jpg"
          title="Python Programming"
          description="This is a python programming course designed for complete beginners. "
          employer="Michigan University"
          number="2"
          button2="Lessons"
          button="Register"
        />
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
              <h2>Add your Course</h2>

              <CloseIcon onClick={handleClose} className="close" />
            </div>
            <hr />

            <p id="transition-modal-title">Course Title</p>
            <input type="text" placeholder="add title" />
            <p className="content" id="transition-modal-description">
              Course Description
            </p>
            <input type="text" placeholder="type your course description" />
            <p className="content" id="transition-modal-description">
              Add course files
            </p>
            <input className="inputfile" type="file" id="files" name="files" multiple />
            <button>Add Course</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Training;
