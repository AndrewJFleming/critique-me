import { createStore, applyMiddleware, compose } from "redux";
//thunk allows us to make our actions functions async
//You'll see how I utilized this in ../actions/posts.js
import thunk from "redux-thunk";

//If you're importing just from the folder, webpack will interpret this as importing from ./reducers/index.js
import reducers from "../reducers";

//Store is our globalized state (Holds all the data for our application)
//All components that 'subscribe' to Central Data Store have access to the global state,
//and are notified when that state changes.
//
//The state that it manages is determined by the reducer function
//Reducer funtions will produce new state snapshots whenever an action reaches it.
//
//If we only had a single reducer, we could pass it in as the first arg...
//But since we'll have multiple, we combine them in reducers/index.js and pass reducers in instead.
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
