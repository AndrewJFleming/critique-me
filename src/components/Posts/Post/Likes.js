import React from "react";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const Likes = ({ post, user }) => {
  const classes = useStyles();
  if (post?.likes?.length > 0) {
    return post.likes.find(
      (like) => like === (user?.result?.googleId || user?.result?._id)
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" className={classes.likeIcon} />
        &nbsp;
        <p className={classes.likeText}>
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </p>
      </>
    ) : (
      <>
        <ThumbUpAltOutlined className={classes.likeIcon} fontSize="small" />
        &nbsp;
        <p className={classes.likeText}>
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </p>
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined className={classes.likeIcon} fontSize="small" />
      &nbsp;<p className={classes.likeText}>Like</p>
    </>
  );
};

export default Likes;
