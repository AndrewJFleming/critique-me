import jwt from "jsonwebtoken";

//This middleware is a gateway that req must pass before requests for actions like LIKE, UPDATE or DELETE will proceed.
//If the user passes the test (user token matches userId from request) then we proceed with the action.

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      //second arg is the secret we specified
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    //If we make it this far, we hit next() and proceed to execute request.
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
