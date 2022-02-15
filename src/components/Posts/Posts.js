import React from "react";
//useSelector() allows us to access global state in a component
//It's similar to useStore() but it allows us to select a specific part of store.
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  //We can pull out a specific piece of global state...
  //Your data will be updated automatically when store data changes.
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <Typography variant="h6" align="center" className={classes.noResults}>
      No results for that search.
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
