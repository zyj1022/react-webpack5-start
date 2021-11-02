import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { hot } from 'react-hot-loader/root';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import { toJS } from 'mobx';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import Router from './router/router';
import store from './stores';

dayjs.locale('zh-cn');

const Container: React.FC<IProps> = () => {
  console.log('root-store', toJS(store));
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  );
};

// const App = hot(Container);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Container />, document.querySelector('#root'));
