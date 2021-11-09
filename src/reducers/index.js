import { combineReducers } from "redux";

import posts from "./posts";

//We can't list multiple reducers as args in with createStore in our root index.js
//In order to pass createStore our various reducers, we combine them into one.
export default combineReducers({
  //You can name the field whatever you want, but you'll access it from the field name.
  posts: posts,
});
