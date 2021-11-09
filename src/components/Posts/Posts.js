import React from "react";
//useSelector() allows us to access global state in a component
//It's similar to useStore() but it allows us to select a specific part of store.
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  //We can pull out a specific piece of global state...
  //Your data will be updated automatically when store data changes.
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <React.Fragment>
      <Post />
      <Post />
    </React.Fragment>
  );
};

export default Posts;
