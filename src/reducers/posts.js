/*
A reducer is a function that accepts state and action args
It'll return state changed based on the action recieved.
Our state param will be called posts in our case.

Because we'll be expecting allow of conditionals, it's best to use a switch statement.
State always has to be equal to something; therefore, we set it to an initial value of an empty array.

We can export default (not declaring the function as const reducer)
because we're combining them in ./reducers/index.js
*/

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
