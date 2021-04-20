import React, { lazy, Suspense, Fragment } from 'react';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import Loading from '@/components/loading';

import { PageWrap, Routers } from '@/router/routes';

const history = createBrowserHistory();
const router = () => (
  <Suspense fallback={<Loading />}>
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
  </Suspense>
);

export default router;
