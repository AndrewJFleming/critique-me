import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Paginate = ({ page }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      page={Number(page) || 1}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
