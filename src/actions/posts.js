import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

//We'll be able to use the functions in ../api/index.js like within getPosts below; api.fetchPosts
import * as api from "../api";

//Components dispatch (trigger) actions and each action has a type and a payload.
//You'll nodice in the posts.js reducer that both of these action fields are referenced.

//The nested async function with the dispatch params is for react-thunk
export const getPosts = () => async (dispatch) => {
  try {
    //destructuring to {data} is equivalent to response.data
    const { data } = await api.fetchPosts();
    //Payload is where we store all our posts
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    //data only required if you're expecting a response so we can ommit 'data'
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
