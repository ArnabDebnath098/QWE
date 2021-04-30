import React from "react";
import "./Approve.css";
import JobApproveCard from "./JobApproveCard";
import CourseApproveCard from "./CourseApproveCard";
import ArticleApproveCard from "./ArticleApproveCard";

function Approve() {
  return (
    <div className="approve">
      <h3>Approve Courses & articles</h3>
      <hr />
      <p>Courses to Approve</p>
      <div className="corsesRegistered">
        <CourseApproveCard
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/10B7B/production/_107157486_students8.jpg"
          company="http://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="Google"
          number="5"
          button2="Decline"
          button="Approve"
        />
        <CourseApproveCard
          image="https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg"
          company="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/03/01104757/University-of-California-Berkeley-400x400.jpg"
          title="Web Development"
          description="This is a web development course designed for complete beginners. It has all the topics including basic HTML CSS JS Mongo dB, Node, Express, React ."
          employer="UCI"
          number="10"
          button2="Decline"
          button="Approve"
        />
      </div>
      <p>Jobs to Approve</p>
      <div className="jobsRegistered">
        <JobApproveCard
          title="Customer Service Executive"
          companyname="Fast and Direct services"
          years="0-8"
          venue="chennai"
          salary="30,000"
        />
        <JobApproveCard
          title="Frontend Developer"
          companyname="Qualyval"
          years="0-2"
          venue="Mumbai"
          salary="45,000"
        />
        <JobApproveCard
          title="SDE intern"
          companyname="Minimalist"
          years="0"
          venue="Gurgaon"
          salary="78,000"
        />
      </div>
      <p>Aticles to approve</p>
      <div className="articlesWritten">
        <ArticleApproveCard
          topicName="React Js"
          author="Reactjs.org"
          content="React makes it painless to create interactive UIs. Design simple views for each state
              in your application, and React will efficiently update and render just the right
              components when your data changes. Declarative views make your code more predictable
              and easier to debug. Component-Based. Build encapsulated components that manage their
              own state, then compose them to make complex UIs."
          likes="5"
        />
        <ArticleApproveCard
          topicName="React Js"
          author="Reactjs.org"
          content="React makes it painless to create interactive UIs. Design simple views for each state
              in your application, and React will efficiently update and render just the right
              components when your data changes. Declarative views make your code more predictable
              and easier to debug. Component-Based. Build encapsulated components that manage their
              own state, then compose them to make complex UIs."
          likes="5"
        />
        <ArticleApproveCard
          topicName="React Js"
          author="Reactjs.org"
          content="React makes it painless to create interactive UIs. Design simple views for each state
              in your application, and React will efficiently update and render just the right
              components when your data changes. Declarative views make your code more predictable
              and easier to debug. Component-Based. Build encapsulated components that manage their
              own state, then compose them to make complex UIs."
          likes="5"
        />
      </div>
    </div>
  );
}

export default Approve;
