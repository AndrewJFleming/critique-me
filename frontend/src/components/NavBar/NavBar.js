import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { LOGOUT } from "../../constants/actionTypes";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import logoImg from "../../images/maestro, green.png";
import useStyles from "./styles";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
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

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    // Trigger refresh when page location changes
    //(AUTH dispatch in Auth.js triggers page redirect)
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img
          className={classes.image}
          src={logoImg}
          alt="CritiqueMe"
          height="60"
        />
        <Typography
          color="secondary"
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          CritiqueMe
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={logout}
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
