import React from "react";
import "./RegisteredCourse.css";
import Card from "./Card";
import "./RegisteredCourse";
import { Link } from "react-router-dom";

function RegisteredCourse() {
  return (
    <div className="registeredCourse">
      <div className="educationHeader">
        <Link to="/">
          <h1 className="link5">QWE</h1>
        </Link>
      </div>
      <div className="registeredCourses">
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
      </div>
    </div>
  );
}

export default RegisteredCourse;
