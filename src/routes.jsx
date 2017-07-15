import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import Bet from './containers/Bet';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/bet" />
    <Route path="bet" component={Bet} />
  </Route>
);
