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