import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books/Books";
import Search from "./pages/Books/Search";
import Saved from "./pages/Books/Saved";
import Header from "./components/Header";
// import './components/Header/Header';
// import './components/Header/Header.css'


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/Search" pages={Search} /> */}
          <Route exact path="/Saved" component={Saved} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
