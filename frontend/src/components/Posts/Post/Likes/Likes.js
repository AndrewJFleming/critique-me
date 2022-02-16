import React from "react";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import useStyles from "./styles";

const Likes = ({ post, user }) => {
  const classes = useStyles();
  if (post?.likes?.length > 0) {
    return post.likes.find(
      (like) => like === (user?.result?.googleId || user?.result?._id)
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" className={classes.actionsIcon} />
        &nbsp;
        <p className={classes.actionsText}>
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </p>
      </>
    ) : (
      <>
        <ThumbUpAltOutlined className={classes.actionsIcon} fontSize="small" />
        &nbsp;
        <p className={classes.actionsText}>
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </p>
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined className={classes.actionsIcon} fontSize="small" />
      &nbsp;<p className={classes.actionsText}>Like</p>
    </>
  );
};

export default Likes;
