import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

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
import DeleteIcon from "@material-ui/icons/Delete";
import LaunchIcon from "@material-ui/icons/Launch";
import { deletePost, likePost } from "../../../actions/posts";
import Modal from "./Modal/Modal";
import Likes from "./Likes";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  return (
    <React.Fragment>
      {showModal ? (
        <Modal
          show={showModal}
          close={closeModalHandler}
          author={post.name}
          heading={post.title}
          desc={post.description}
          image={post.selectedFile}
          post={post}
          user={user}
        />
      ) : null}
      <Card className={classes.card}>
        <CardHeader
          title={
            <span className={classes.launchText} onClick={showModalHandler}>
              {post.title}
            </span>
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

        <span className={classes.launchWrapper} onClick={showModalHandler}>
          <LaunchIcon className={classes.launch} />
          <CardMedia
            size="small"
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
          />
        </span>

        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {`${post.description.substring(0, 100)}...`}
            <br />
            <span className={classes.launchText} onClick={showModalHandler}>
              Read more
            </span>
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
            <Likes post={post} user={user} />
          </Button>

          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              className={classes.dangerIcon}
              size="small"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon className={classes.likeIcon} />
            </Button>
          )}
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
