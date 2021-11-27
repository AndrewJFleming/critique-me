import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
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
      danger: "#47221e",
    },
  },
});

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route
              path="/auth"
              exact
              component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
            />
          </Switch>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
