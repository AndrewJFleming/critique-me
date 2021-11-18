import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { getPosts, fetchPost } from "../../actions/posts";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

// const Likes = () => {
//   if (post?.likes?.length > 0) {
//     return post.likes.find(
//       (like) => like === (user?.result?.googleId || user?.result?._id)
//     ) ? (
//       <>
//         <ThumbUpAltIcon fontSize="small" className={classes.likeIcon} />
//         &nbsp;
//         {post.likes.length > 2
//           ? `You and ${post.likes.length - 1} others`
//           : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
//       </>
//     ) : (
//       <>
//         <ThumbUpAltOutlined fontSize="small" />
//         &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
//       </>
//     );
//   }

//   return (
//     <>
//       <ThumbUpAltOutlined fontSize="small" />
//       &nbsp;Like
//     </>
//   );
// };

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPost(path));
  }, [dispatch, path]);

  return !post.selectedFile || !post ? (
    <CircularProgress />
  ) : (
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
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          // disabled={!user?.result}
          // onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon />
        </Button>
        {/* {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && ( */}
        <Button
          size="small"
          // onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon className={classes.likeIcon} />
        </Button>
        {/* )} */}
        <Link className={classes.return} to={"/"}>
          Back&nbsp;
          <KeyboardReturnIcon />
        </Link>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
