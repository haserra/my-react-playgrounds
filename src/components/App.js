import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Display from "../Display";

import Header from "./common/Header";
import HomePage from "./home/HomePage";
import Chapter10 from "./chapters/Chapter10";
import Chapter12 from "./chapters/Chapter12";
import Chapter11 from "./chapters/Chapter11";
import Chapter13 from "./chapters/Chapter13";
import Chapter14 from "./chapters/Chapter14";
import Chapter15 from "./chapters/Chapter15";
import Chapter16 from "./chapters/Chapter16";
import Chapter17 from "./chapters/Chapter17";
import Chapter9 from "./chapters/Chapter9";
import Chapter99 from "./chapters/Chapter99";

let myName = `Horacio`;
let myCity = `Leiria`;

class App extends Component {
  // class fields
  state = {
    city: "London",
  };

  innerName = "António";
  innerCity = "Entroncamento";

  // class methods

  message = () =>
    `Hello!, this is ${myName} ,and currently I am based in ${myCity}`;

  changeCity = () => {
    debugger;
    this.setState({
      city: this.state.city === "London" ? "New York" : "London",
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="bg-primary text-white text-center p-3">
          Pro React 16 by Adam Freeman
        </h1>
        <h5> {this.message()}</h5>
        <h5> {this.innerName}</h5>
        <Display value={this.state.city} callback={this.changeCity} />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/chapter9" component={Chapter9} />
          <Route path="/chapter10" component={Chapter10} />
          <Route path="/chapter11" component={Chapter11} />
          <Route path="/chapter12" component={Chapter12} />
          <Route path="/chapter13" component={Chapter13} />
          <Route path="/chapter14" component={Chapter14} />
          <Route path="/chapter15" component={Chapter15} />
          <Route path="/chapter16" component={Chapter16} />
          <Route path="/chapter17" component={Chapter17} />
          <Route path="/chapter99" component={Chapter99} />
        </Switch>
      </div>
    );
  }
}

export default App;
