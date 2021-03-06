import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: "99",
    margin: "0 0 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 20px",
    backgroundColor: "#705d58",
  },
  heading: {
    fontFamily: "Playfair Display",
    color: "#d7f0e9",
    textDecoration: "none",
    "@media(max-width: 599px)": {
      fontSize: "2rem",
    },
    "@media(max-width: 449px)": {
      display: "none",
    },
  },
  image: {
    marginRight: "15px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    display: "flex",
    paddingRight: "20px",
    alignItems: "center",
    color: "#fff",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  green: {
    color: "#251b15",
    backgroundColor: "#87e89b",
  },
}));
