import React from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

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
import Likes from "../Likes/Likes";
import Backdrop from "./Backdrop";
import DeleteIcon from "@material-ui/icons/Delete";

const ModalOverlay = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const content = (
    <React.Fragment>
      <Card className="modal">
        <CardMedia
          size="small"
          className={classes.media}
          image={props.image}
          title={props.heading}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {props.heading}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {props.author}
          </Typography>
          <Typography variant="body" color="textSecondary" gutterBottom>
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            //Disabled if no user is logged in
            disabled={!props.user?.result}
            onClick={() => dispatch(likePost(props.post._id))}
          >
            <Likes post={props.post} user={props.user} />
          </Button>
          {(props.user?.result?.googleId === props.post?.creator ||
            props.user?.result?._id === props.post?.creator) && (
            <Button
              className=""
              size="small"
              onClick={() => dispatch(deletePost(props.post._id))}
            >
              <DeleteIcon className={classes.dangerIcon} />
            </Button>
          )}
          <Button
            className={classes.dangerIcon}
            size="small"
            onClick={props.close}
          >
            Close
          </Button>
        </CardActions>
      </Card>{" "}
      <Card className="modal">
        <CardMedia
          size="small"
          className={classes.media}
          image={props.image}
          title={props.heading}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {props.heading}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {props.author}
          </Typography>
          <Typography variant="body" color="textSecondary" gutterBottom>
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            //Disabled if no user is logged in
            disabled={!props.user?.result}
            onClick={() => dispatch(likePost(props.post._id))}
          >
            <Likes post={props.post} user={props.user} />
          </Button>
          {(props.user?.result?.googleId === props.post?.creator ||
            props.user?.result?._id === props.post?.creator) && (
            <Button
              className=""
              size="small"
              onClick={() => dispatch(deletePost(props.post._id))}
            >
              <DeleteIcon className={classes.dangerIcon} />
            </Button>
          )}
          <Button
            className={classes.dangerIcon}
            size="small"
            onClick={props.close}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.close} />}
      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
