import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { lightGreen } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    margin: "0 0 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 20px",
    backgroundColor: "#7d5a5a",
  },
  heading: {
    fontFamily: "Playfair Display",

    color: "#cbe7e2",
    textDecoration: "none",
  },
  image: {
    marginRight: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  green: {
    // color: theme.palette.getContrastText(lightGreen[900]),
    // backgroundColor: lightGreen[900],
    color: "#251b15",
    backgroundColor: "#87e89b",
  },
}));
