import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundBlendMode: "darken",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "50px",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
    border: "2px solid #705d58",
    boxShadow: "5px 5px 5px rgba(0,0,0,0)",
    transition: theme.transitions.create(["box-shadow", "border-color"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      border: "2px solid #a1928e",
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
    },
  },
  content: {
    height: "100%",
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
    margin: "10px 0px 0px",
    fontStyle: "italic",
  },
  tags: {
    margin: "10px 0px 0px",
  },
  cardActions: {
    backgroundColor: "#d7f0e9",
    padding: "8px 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  likeIcon: {
    color: theme.palette.alternative.bright,
  },
  cardActions: {
    backgroundColor: "#d7f0e9",
    padding: "8px 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
