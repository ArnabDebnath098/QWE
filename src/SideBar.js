import React from "react";
import "./SideBar.css";
import Avatar from "@material-ui/core/Avatar";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import StyleOutlinedIcon from "@material-ui/icons/StyleOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="sideBar">
      <div className="topProfile">
        <Avatar className="profileImage" alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <div className="StudentInfo">
          <h3>Student Name</h3>
          <p>Occupation</p>
          <p>Working at Qualyval</p>
          <p>Profile Type: Tutor</p>
        </div>
      </div>
      <div className="accountOptions">
        <NavLink className="anchor" to="/dashboard" activeClassName="active">
          <button className="sideMenu">
            <DashboardOutlinedIcon className="dash" />
            Dashboard
          </button>
        </NavLink>

        <NavLink className="anchor" to="/education" activeClassName="active">
          <button className="sideMenu">
            <SchoolOutlinedIcon className="dash" />
            Education
          </button>
        </NavLink>

        <NavLink className="anchor" to="/registeredCourse" activeClassName="active">
          <button className="sideMenu">
            <MenuBookOutlinedIcon className="dash" />
            Registered Courses
          </button>
        </NavLink>

        <NavLink className="anchor" to="/myArticles" activeClassName="active">
          <button className="sideMenu">
            <LibraryBooksOutlinedIcon className="dash" />
            Articles by you
          </button>
        </NavLink>
        <NavLink className="anchor" to="/skills" activeClassName="active">
          <button className="sideMenu">
            <StyleOutlinedIcon className="dash" />
            My Skills
          </button>
        </NavLink>
        <NavLink className="anchor" to="/myJobs" activeClassName="active">
          <button className="sideMenu">
            <WorkOutlineOutlinedIcon className="dash" />
            Applied Jobs
          </button>
        </NavLink>
      </div>

      <div className="editProfile">
        <button>LogOut</button>
      </div>
    </div>
  );
}

export default SideBar;
