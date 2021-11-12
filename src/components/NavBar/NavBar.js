import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../constants/actionTypes";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import logoImg from "../../images/maestro.png";
import useStyles from "./styles";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  //Take note of how we retrieve data from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    try {
      dispatch({ type: LOGOUT });

      history.push("/");

      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  //JWT...
  //Trigger page refresh when user state is set to new user login.
  //   useEffect(() => {
  //     const token = user?.token;
  //     setUser(JSON.parse(localStorage.getItem("profile")), []);
  //   });

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          CritiqueMe
        </Typography>
        <img
          className={classes.image}
          src={logoImg}
          alt="CritiqueMe"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
