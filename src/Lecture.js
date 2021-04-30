import React from "react";
import "./Lecture.css";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { ReactVideo } from "reactjs-media";

function Lecture() {
  return (
    <div className="lecture">
      <div className="lectureTop">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="link3" to="lessons">
            Lessons
          </Link>

          <Typography className="link5">Lecture 1</Typography>
        </Breadcrumbs>
      </div>
      <div className="lectureBottom">
        <div className="lectureLeft">
          <h1>Video Title</h1>
          <ReactVideo
            className="player"
            src="https://www.example.com/url_to_video.mp4"
            poster="https://www.example.com/poster.png"
            primaryColor="red"
            // other props
          />
        </div>
        <div className="lectureRight">
          <h3>Video Description</h3>
          <div className="descImg"></div>
          <p>
            This is the native video player but it is enhanced and given a great UI. You have to
            import it from the library and pass in props. It can be used for normal video files
            supported by the browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
