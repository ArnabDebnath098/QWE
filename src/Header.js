import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import { NavLink, Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

function Header() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="header">
      <div className="headerLeft">
        <Link className="link" to="/">
          <h2 className="logo">QWE</h2>
        </Link>
      </div>
      <div className="headerMiddle">
        <NavLink className="link1" to="jobs" activeClassName="active1">
          <h2 className="menuItems">Jobs</h2>
        </NavLink>
        <NavLink className="link1" to="articles" activeClassName="active1">
          <h2 className="menuItems">Articles</h2>
        </NavLink>
        <NavLink className="link1" to="training" activeClassName="active1">
          <h2 className="menuItems">Trainings & courses</h2>
        </NavLink>
        <NavLink className="link1" to="discussion" activeClassName="active1">
          <h2 className="menuItems">Discussion Forum</h2>
        </NavLink>
      </div>
      <div className="headerRight">
        <Avatar
          className="avatar"
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />
        <Popper
          className="dropdown"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link className="NavLink" to="dashboard">
                      <MenuItem className="NavLink2" onClick={handleClose}>
                        My Account
                      </MenuItem>
                    </Link>
                    <Link className="NavLink" to="approve">
                      <MenuItem className="NavLink2" onClick={handleClose}>
                        Approve
                      </MenuItem>
                    </Link>

                    <MenuItem className="NavLink2" onClick={handleClose}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default Header;
