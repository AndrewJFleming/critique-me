import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

/*
A reducer is a function is responsible for mutating global state in the store. 
Reducers receive inputs and return state changed based on the action recieved.
Our state param will be called posts in our case (People often call it state).

Because we'll be expecting a lot of conditionals, it's best to use a switch statement.
State always has to be equal to something; therefore, we set it's default value to empty array.

The reducer function always has two params because it needs to have access to the initial state
and the dispatched action that will produce a state change.
The reducer function must always return a new state obj (eg action.payload for the FETCH_ALL case)
*/

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    //Code following stacked cases executes for all of them (UPDATE and LIKE in this case).
    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
