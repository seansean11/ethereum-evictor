import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bet extends Component {

  constructor() {
    super();
    this.state = {
      selectedOption: '',
      value: '',
      betPlaced: false
    }

    this.setAmount = this.setAmount.bind(this);
    this.submit = this.submit.bind(this);
  }

  select(option) {
    this.setState({
      selectedOption: option
    });
  }

  setAmount(e) {
    this.setState({ value: e.target.value });
  }

  submit(e) {
    this.setState({ betPlaced: true });
    this.props.makeBet(this.state.selectedOption, this.state.value)
      .then(result => {
        console.log(result);
        this.props.setTotals();
      });
  }
  
  render() {
    const { title, publicKey, positiveItem, negativeItem } = this.props
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="bet-box">

            <div className="title-container">
              <h1>{title}</h1>
            </div>

            <div className="contenders-container" >
              <div className={'contender first ' + (this.state.selectedOption === 0 ? 'selected' : '')} onClick={() => this.select(0)}>
                <h2>YES</h2>
                <div className="contender-info">
                  <div className="row">
                    <span className="info-left">Betters</span><span className="info-right">54</span>
                  </div>
                  <div className="row">
                    <span className="info-left">Contender Pot</span><span className="info-right">{negativeItem.total}</span>
                  </div>
                </div>
                <h2 className={"pick " + (this.state.selectedOption === 0 ? '' : 'hidden')}>
                  SELECTED!
                  </h2>
              </div>

              <div className={'contender second ' + (this.state.selectedOption === 1 ? 'selected' : '')} onClick={() => this.select(1)}>
                <h2>NO</h2>
                <div className="contender-info">
                  <div className="row">
                    <span className="info-left">Betters</span><span className="info-right">34</span>
                  </div>
                  <div className="row">
                    <span className="info-left">Contender Pot</span><span className="info-right">{positiveItem.total}</span>
                  </div>
                </div>
                <h2 className={"pick " + (this.state.selectedOption === 1 ? '' : 'hidden')}>
                  SELECTED!
                </h2>
              </div>
            </div>

            <div className="action-container">
              <h2>Get in on this Bet!</h2>
              <input type="text" value={publicKey} placeholder="Your Wallet Address..." />
              <input onChange={this.setAmount} type="number" placeholder="Your Bet Amount..." />
              <div>
                <a onClick={() => this.submit()}>
                  <span className={(this.state.betPlaced ? 'hidden' : '')}>Place Your Bet!</span>
                  <span className={(this.state.betPlaced ? '' : 'hidden')}>Bet Placed!</span>
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
  positiveItem: { name: "Yes", total: 0 },
  negativeItem: { name: "No", total: 0 },
  publicKey: ""
}

export default Bet;