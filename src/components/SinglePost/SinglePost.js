import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getPosts } from "../../actions/posts";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // const post = useSelector((state) => state.posts.find((p) => p._id === path));
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
    setPost(posts.find((p) => p._id === path));
  }, [post, dispatch, posts]);

  return (
    <React.Fragment>
      {post && (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
          />
          <CardContent className={classes.content}>
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              By: {post.name}
            </Typography>
            <Typography variant="body" color="textSecondary" gutterBottom>
              {post.description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.uploadTime}
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default SinglePost;
