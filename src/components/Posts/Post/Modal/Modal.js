import React from "react";
import { useDispatch } from "react-redux";

import "./Modal.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { likePost } from "../../../../actions/posts";
import Likes from "../Likes";

const Modal = ({ post, user, close, author, heading, desc, image }) => {
  const dispatch = useDispatch();

  return (
    <Card className="modal">
      <CardMedia size="small" className="media" image={image} title={heading} />
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
      <CardActions className="cardActions">
        <Button
          size="small"
          //Disabled if no user is logged in
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes post={post} user={user} />
        </Button>
        <Button className="actionsText" size="small" onClick={close}>
          Close
        </Button>
      </CardActions>
    </Card>
  );
};

export default Modal;
