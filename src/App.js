import React, { useState, useEffect } from "react";
//Allows us to dispatch an action; Best way to dispatch is within useEffect()
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import NavBar from "./components/NavBar/NavBar";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <NavBar />
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
