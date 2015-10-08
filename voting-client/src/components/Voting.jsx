import React from 'react';

export default class extends React.Component {
  getPair() {
    return this.props.pair || [];
  }

  render() {
    let entryButton = this.getPair().map(entry => 
      <button key={entry}>
        <h1>{entry}</h1>
      </button>
    )
    return (
      <div className="voting">
        {entryButton}
      </div>
    );
  }
}