import React from 'react';
import {RouteHandler} from 'react-router';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.Component {
  render() {
    return (
      React.cloneElement(this.props.children, {
        pair,
        tally
      })
    );
  }
}
