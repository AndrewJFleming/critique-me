import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
    backgroundColor: "#f4fbf9",
    border: "2px solid #705d58",
  },
  content: {
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "10px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px 0px",
  },
  title: {
    padding: "0",
  },
  uploadTime: {
    fontStyle: "italic",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  likeIcon: {
    color: theme.palette.alternative.bright,
  },
}));
