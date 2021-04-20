import React, {Component} from "react";
import {observer, inject} from "mobx-react";

@inject("store")
@observer
class Pie extends Component {
  render() {
    return <h1>pie</h1>;
  }
}

export default Pie;
