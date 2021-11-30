import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    margin: "1rem 0",
    padding: "16px",
    "& a": { color: "white" },
    "@media(max-width: 599px)": {
      marginBottom: "0",
    },
  },
  paginationForm: {
    "@media(min-width: 1280px)": {
      display: "none",
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
