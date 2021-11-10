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
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
