import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Typography } from "@material-ui/core";
import logoImg from "../../images/maestro.png";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
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
    </AppBar>
  );
};

export default NavBar;
