import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bet extends Component {


  constructor() {
    super();
    this.state = {
      selectedOption: ''
    }
  }

  select = (option) => {
    this.setState({
      selectedOption: option
    })
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

            <div className="contenders-container" >
              <div className="contender {'selected': this.state.selectedOption === 1}" onClick={this.select(1)}>
              <input type="radio" value="1" checked={this.state.selectedOption === 1}/>
                <h2>YES</h2>
                <div className="contender-info">
                  <div className="row">
                    <span className="info-left">Betters</span><span className="info-right">54</span>
                  </div>
                  <div className="row">
                    <span className="info-left">Contender Pot</span><span className="info-right">254</span>
                  </div>
                </div>
              </div>

              <div className="contender" onClick={this.select(2)}>
                <input type="radio" value="2" checked={this.state.selectedOption === 2}/>
                <h2>NO</h2>
                <div className="contender-info">
                  <div className="row">
                    <span className="info-left">Betters</span><span className="info-right">34</span>
                  </div>
                  <div className="row">
                    <span className="info-left">Contender Pot</span><span className="info-right">143</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="action-container">
              <h2>Get in on this Bet!</h2>
              <input type="text" placeholder="Your Wallet Key..."/>
              <input type="text" placeholder="Your Bet Amount..."/>
              <div>
                <a href="#">
                  Place Your Bet!
                </a>
              </div>
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
    name: PropTypes.string,
    total: PropTypes.number
  }),
  negativeItem: PropTypes.shape({
    name: PropTypes.string,
    total: PropTypes.number
  }),
  publicKey: PropTypes.string
};

Bet.defaultProps = {
  title: 'Will Mcgregor beat Mayweather at the August 26th, 2017 fight?',
  positiveItem: { name: "Yes", total: 12414 },
  negativeItem: { name: "No", total: 423 },
  publicKey: "0x251b693b329ec942783ab084eae4dc9c613766f9"
}

export default Bet;