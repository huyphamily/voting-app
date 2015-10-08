import React from 'react';

export default class extends React.Component {
  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    let entryButton = this.getPair().map(entry => 
      <button key={entry} onClick={() => this.props.vote(entry)}>
        <h1>{entry}</h1>
        {this.hasVotedFor(entry) ?
          <div className="label">Voted</div> :
          null}
      </button>
    )
    return (
      <div className="voting">
        {entryButton}
      </div>
    );
  }
}