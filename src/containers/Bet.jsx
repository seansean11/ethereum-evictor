import React, { Component } from 'react';

class Bet extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="bet-box">

            <div className="title-container">
              <h1>[[BET TITLE]]</h1>
            </div>
            
            <div className="contenders-container">
              <div className="contender">
                <h2>[[CONTENDER TITLE]]</h2>
                <div className="contender-info">
                  <span className="info-left">
                    
                  </span>
                </div>
              </div>

              <div className="contender">
                <h2>[[CONTENDER TITLE]]</h2>
              </div>
            </div>

            <div className="action-container"></div>

          </div>
        </div>
      </div>
    );
  }
}

export default Bet;