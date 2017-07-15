import React, { Component } from 'react';

class Bet extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>Good to Go!</h1>
          <p>Your Truffle Box is installed and ready.</p>
          <h2>Smart Contract Example</h2>
          <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
          <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
        </div>
      </div>
    );
  }
}

export default Bet;