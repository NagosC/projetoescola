import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './Myroute';
import Login from '../Pages/Login';
import Page404 from '../Pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
