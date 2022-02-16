import React, { useState, useEffect } from "react";
//Allows us to dispatch an action; Best way to dispatch get req is within useEffect()
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import ChipInput from "material-ui-chip-input";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Pagination from "../Pagination/Pagination";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import {
  Grow,
  Container,
  Grid,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  //Reads our URL to see if 'page' param exists.
  //If no 'page' param then default to '1'.
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  //When working with arrays in state, you need to spread existing array before adding new tag.
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
            <Container className={classes.pagination}>
              <Pagination page={page} />
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Posts"
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                value={tags}
                style={{ margin: "10px 0" }}
                onAdd={handleAddChip}
                onDelete={handleDeleteChip}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Container
                className={`${classes.pagination} ${classes.paginationForm}`}
              >
                <Pagination page={page} />
              </Container>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
