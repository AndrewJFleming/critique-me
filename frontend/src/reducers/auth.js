import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      //We want to store google login for a session so users don't have to login
      //if they refresh the page.
      //(Question mark plus dot syntax is called optional chaining)
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
