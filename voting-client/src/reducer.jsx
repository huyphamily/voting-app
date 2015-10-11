import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  const currentRound = state.getIn(['vote', 'round'])
  if (currentPair && currentPair.includes(entry)) {
    return state.set('myVote', Map({
      entry,
      round: currentRound
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const myVote = state.get('myVote');
  if (myVote && myVote.get('round') !== state.getIn(['vote', 'round'])) {
    return state.remove('myVote');
  } else {
    return state;
  }
}

export default function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  }
  return state;
}
