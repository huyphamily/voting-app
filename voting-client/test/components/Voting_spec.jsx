import React from 'react'
import ReactTestUtils from 'react-addons-test-utils';
import {List} from 'immutable';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} 
  = ReactTestUtils;

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

  it('disables buttons when user has voted', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              hasVoted="Trainspotting" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].getDOMNode().hasAttribute('disabled')).to.equal(true);
    expect(buttons[1].getDOMNode().hasAttribute('disabled')).to.equal(true);
  });

  it('adds label to the voted entry', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              hasVoted="Trainspotting" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons[0].getDOMNode().textContent).to.contain('Voted');
  });

  it('renders just the winner when there is one', () => {
    const component = renderIntoDocument(
      <Voting winner="Trainspotting" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(0);

    const winner = React.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Trainspotting');
  });

  it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    let component = renderIntoDocument(
      <Voting pair={pair} />
    );

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.getDOMNode().textContent).to.equal('Trainspotting');

    pair[0] = 'Sunshine';
    component = React.render(<Voting pair={pair} />, React.findDOMNode(component).parentNode);
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.getDOMNode().textContent).to.equal('Trainspotting');
  });

});