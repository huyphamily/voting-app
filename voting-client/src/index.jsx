import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';

const routes = <Route path="/" component={App}>
  <IndexRoute component={Voting} />
</Route>;

ReactDom.render(<Router routes={routes}/>, document.getElementById('app'));
