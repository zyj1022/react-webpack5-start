import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { hot } from 'react-hot-loader/root';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import Router from './router/router';
import RootStore from './stores';

const store = new RootStore();
dayjs.locale('zh-cn');

const Container: React.FC<IProps> = () => {
  console.log('store', store);
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  );
};

// const App = hot(Container);

ReactDOM.render(<Container />, document.querySelector('#root'));
