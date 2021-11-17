import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
import LikeIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" className={classes.likeIcon} />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Link to={`/post/${post._id}`}>
            <span>{post.title}</span>
          </Link>
        }
        subheader={post.name}
        action={
          (user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              style={{ color: "black" }}
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              Edit
            </Button>
          )
        }
      ></CardHeader>

      <Link to={`/post/${post._id}`}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
      </Link>

      <CardContent className={classes.content}>
        <Typography variant="body" color="textSecondary" gutterBottom>
          {post.description}
        </Typography>
        <Typography variant="body2" className={classes.tags}>
          {moment(post.createdAt).fromNow()}
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
          //Disabled if no user is logged in
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon className={classes.likeIcon} />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
