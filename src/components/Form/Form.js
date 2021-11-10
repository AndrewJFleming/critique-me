import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  //This form post data is stored in memory
  //until our creatPost dispatch when it'll be
  //added to our backend DB and Redux global state
  const [postData, setPostData] = useState({
    artist: "",
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //We trigger our createPost action with dispatch
    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({
      artist: "",
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create Post</Typography>
        <TextField
          name="artist"
          variant="outlined"
          label="Artist"
          fullWidth
          value={postData.artist}
          onChange={(e) =>
            setPostData({
              //We spread the postData obj so that we're only editing the
              //value of the field associated with this textField and not
              //overwriting the other fields' values.
              ...postData,
              artist: e.target.value,
            })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData({
              ...postData,
              title: e.target.value,
            })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({
              ...postData,
              description: e.target.value,
            })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value,
            })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
