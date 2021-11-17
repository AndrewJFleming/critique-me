import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import SinglePost from "./components/SinglePost/SinglePost";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#699120",
    },
    secondary: {
      main: "#cbe7e2",
    },
    alternative: {
      main: "#7d5a5a",
      bright: "#509269",
      dark: "#000000",
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/post/:postId" component={SinglePost} />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
