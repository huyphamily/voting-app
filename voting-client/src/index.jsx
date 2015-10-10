import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = <Route path="/" component={App}>
  <Route path="results" component={Results} />
  <IndexRoute component={Voting} />
</Route>;

ReactDOM.render(<Router routes={routes}/>, document.getElementById('app'));
