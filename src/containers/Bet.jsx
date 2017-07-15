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
                  <div className="row">
                    <span className="info-left">Betters</span><span className="info-right">54</span>
                  </div>
                  <div className="row">
                    <span className="info-left">Contender Pot</span><span className="info-right">254</span>
                  </div>
                </div>
              </div>

              <div className="contender">
                <h2>[[CONTENDER TITLE]]</h2>
                <div className="contender-info">
                  <span className="info-left">Betters</span><span className="info-right">34</span>
                  <span className="info-left">Contender Pot</span><span className="info-right">143</span>
                </div>
              </div>
            </div>

            <div className="action-container">
              <h2>Get in on this Bet!</h2>
              <input type="text" placeholder="Your Wallet Key..."/>
              <input type="text" placeholder="Your Bet Amount..."/>
              <a href="#">
                <div className="place-bet">
                  Place Your Bet!
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Bet;