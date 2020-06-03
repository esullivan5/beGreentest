import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Registration from "./pages/Registration";

import Footer from "./components/Footer/index";
import Login from "./pages/login";
// import Nav from "./components/Nav";
import MainPage from "./pages/mainpage";
import Maps from "./pages/maps";
import Articles from  "./pages/Articles";
import Messages from "./pages/Messages";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path={["/active"]}>
          <Books />
        </Route>
        <Route exact path={["/register",]}>
          <Registration />
        </Route>        
        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <Route exact path={["/mainpage",]}>
          <MainPage />
        </Route>
        <Route exact path={["/maps",]}>
          <Maps />
        </Route>
        <Route exact path={["/articles"]}>
          <Articles />
        </Route>                          
        <Route>
          <NoMatch />
        </Route>
      </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
