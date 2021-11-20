import React from "react";
import { useDispatch } from "react-redux";

import useStyles from "../styles";
import "./Modal.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { likePost, deletePost } from "../../../../actions/posts";
import Likes from "../Likes";
import DeleteIcon from "@material-ui/icons/Delete";

const Modal = ({ post, user, close, author, heading, desc, image }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="backdrop">
      <Card className="modal">
        <CardMedia
          size="small"
          className={classes.media}
          image={image}
          title={heading}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {author}
          </Typography>
          <Typography variant="body" color="textSecondary" gutterBottom>
            {desc}
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
              className=""
              size="small"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon className={classes.dangerIcon} />
            </Button>
          )}
          <Button className={classes.dangerIcon} size="small" onClick={close}>
            Close
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Modal;
