import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Breadcrumb} from "antd";

@inject("store")
@observer
class BreadcrumbBar extends Component {
  render() {
    return (
      <Breadcrumb style={{margin: "16px 0"}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadcrumbBar;
