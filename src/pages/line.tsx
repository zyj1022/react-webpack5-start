import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Line extends Component {
  render() {
    return <h1>line</h1>;
  }
}

export default Line;
