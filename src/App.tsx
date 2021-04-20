import React, { Fragment } from 'react';
import { HashRouter, Switch, Route, Router } from 'react-router-dom';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { inject, observer } from 'mobx-react';
import { PageWrap, Routers } from './router/routes';
import './styles/App.scss';

const history = createBrowserHistory();
const App: React.FC<IProps> = (props) => {
  // console.log('App', props.store.common.name);
  return (
    <Router history={history}>
      <Switch>
        {Routers.map((item) => (
          <Route
            key={item.path}
            exact
            path={`/${item.path}`}
            component={() => (
              <PageWrap>
                <item.component />
              </PageWrap>
            )}
          />
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default inject('store')(observer(App));
