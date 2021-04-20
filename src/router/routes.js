import React, { lazy, Fragment } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

import loadable from '@loadable/component';
import HeaderBar from '../components/headerBar';
import BreadcrumdBar from '../components/breadcrumd';
import SiderBar from '../components/siderBar';
import { Layout } from 'antd';

const { Content } = Layout;
const HeaderBarWithRouter = withRouter(HeaderBar);
const SiderBarWithRouter = withRouter(SiderBar);

const Home = withRouter(loadable(() => import('../pages/home')));
const About = withRouter(loadable(() => import('../pages/about')));
const Case = withRouter(loadable(() => import('../pages/case')));
const Pie = withRouter(loadable(() => import('../pages/pie')));
const Line = withRouter(loadable(() => import('../pages/line')));

export const Routers = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'About',
    component: About,
  },
  {
    path: 'Case',
    component: Case,
  },
  {
    path: 'Pie',
    component: Pie,
  },
  {
    path: 'Line',
    component: Line,
  },
];

export const PageWrap = ({ children }) => {
  return (
    <Fragment>
      <HeaderBarWithRouter />
      <Layout>
        <SiderBarWithRouter />
        <Layout style={{ padding: `0 20px 20px` }}>
          <BreadcrumdBar />
          <Content
            style={{
              background: '#fff',
              padding: 20,
              margin: 0,
              minHeight: 800,
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};
