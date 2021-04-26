import React, { Component } from 'react';
import { runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

@inject('store')
@observer
class SiderBar extends Component {
  getMenuNodes = (MenuList) => {
    return MenuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon}
                <span>{item.title}</span>
              </span>
            }>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };

  onOpenChange = (key) => {
    // runInAction(() => {
    //   this.props.store.common.subKey = key;
    // });
    this.props.store.common.setSubKey(key);
    // console.log('onOpenChange', key);
  };

  render() {
    const data = [
      {
        title: '首页',
        icon: <HomeOutlined />,
        path: 'home',
      },
      {
        title: '商品',
        icon: <HomeOutlined />,
        path: 'sub1',
        children: [
          {
            title: 'case',
            icon: <HomeOutlined />,
            path: 'case',
          },
          {
            title: 'about',
            icon: <HomeOutlined />,
            path: 'about',
          },
        ],
      },
      {
        title: '图形图标',
        icon: <HomeOutlined />,
        path: 'sub2',
        children: [
          {
            title: 'pie',
            icon: <HomeOutlined />,
            path: 'pie',
          },
          {
            title: 'line',
            icon: <HomeOutlined />,
            path: 'line',
          },
        ],
      },
    ];
    const path = this.props.location.pathname;
    const {
      store: { common },
    } = this.props;

    // console.log('SiderBar', this.getMenuNodes(data), path);
    const openKeys = [...common.subKey];
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          onOpenChange={this.onOpenChange}
          defaultSelectedKeys={['case']}
          openKeys={openKeys}
          selectedKeys={[path.substr(1, path.length)]}
          style={{ height: '100%', borderRight: 0 }}>
          {this.getMenuNodes(data)}
        </Menu>
      </Sider>
    );
  }
}

export default SiderBar;
