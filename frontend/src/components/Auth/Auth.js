import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

import { AUTH } from "../../constants/actionTypes";
import { signup, signin } from "../../actions/auth";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import Icon from "./icon";
import useStyles from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      //We also pass history so we can redirect once something happens
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
    console.log(formData);
  };
  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In Failed");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} backgroundColor="primary">
          <LockOutlinedIcon htmlColor="#fff" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="987201675497-dbqn4hoam2qg6ah98bqu4q78q9bd0i97.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="secondary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
