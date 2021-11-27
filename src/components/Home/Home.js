import React, { useState, useEffect } from "react";
//Allows us to dispatch an action; Best way to dispatch get req is within useEffect()
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Pagination from "../Pagination";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { Grow, Container, Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles;

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
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
            <Paper
              elevation={6}
              // className={classes.pagination}
            >
              <Pagination
              // page={page}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
