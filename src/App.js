import "./App.css";
import { Switch,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Component } from "react";
import NavBar from "./Component/NavBar";
import ProjectList from "./Component/ProjectList";
import Details from "./Component/Details";
import Default from "./Component/Default";
import Cart from './Component/cart'
import Modal from "./Component/Modal";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProjectList} />
          <Route path="/details" component={Details} />
          <Route path="/store" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}
export default App;