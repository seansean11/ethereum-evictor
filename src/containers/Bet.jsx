import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bet extends Component {
  constructor() {

  }

  render() {
    const { title, positiveItem, negativeItem } = this.props;
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="bet-box">

            <div className="title-container">
              <h1>{title}</h1>
            </div>
            
            <div className="contenders-container">
              <div className="contender">
                <h2></h2>
                <div className="contender-info">
                  <span className="info-left">Betters</span><span className="info-right">54</span>
                  <span className="info-left">Contender Pot</span><span className="info-right">254</span>
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

Bet.PropTypes = {
  title: PropTypes.string,
  positiveItem: PropTypes.shape({
    total: PropTypes.number
  }),
  negativeItem: PropTypes.shape({
    total: PropTypes.number
  }),
  publicKey: PropTypes.string
};

Bet.defaultProps = {
  title: 'Bet Title',
  positiveItem: { total: 12414 },
  negativeItem: { total: 423 },
  publicKey: "0x251b693b329ec942783ab084eae4dc9c613766f9"
}

export default Bet;