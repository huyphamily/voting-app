import React from 'react';
import {RouteHandler} from 'react-router';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default class App extends React.Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {pair: pair })}
      </div>);
  }
}
