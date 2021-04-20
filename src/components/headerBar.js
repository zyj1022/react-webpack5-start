import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
const {Header} = Layout;

function HeaderBar(props) {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{lineHeight: "64px"}}
      >
        <Menu.Item key="1"><Link to='/home'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/case'>Case</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/about'>About</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderBar;
