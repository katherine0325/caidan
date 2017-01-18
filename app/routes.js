import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Pageone from './components/Pageone';
import Pagetwo from './components/Pagetwo';

export default (
  <Route handler={App}>
    <Route path='/' handler={Pageone} />
	<Route path='/123' handler={Pagetwo} />
  </Route>
);