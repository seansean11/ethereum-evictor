import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bet extends Component {

  constructor() {
    super();
    this.state = {
      selectedOption: '',
      value: ''
    }

    this.select = this.select.bind(this);
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
    this.props.makeBet(this.state.selectedOption, this.state.value);
    e.preventDefault();
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
              <div className="contender" onClick={() => this.select(0)}>
              <input type="radio" value="1" checked={this.state.selectedOption === 0}/>
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

              <div className="contender" onClick={() => this.select(1)}>
                <input type="radio" value="2" checked={this.state.selectedOption === 1}/>
                <h2>NO</h2>
                <div className="contender-info">
                  <span className="info-left">Betters</span><span className="info-right">34</span>
                  <span className="info-left">Contender Pot</span><span className="info-right">143</span>
                </div>
              </div>
            </div>

            <div className="action-container">
              <h2>Get in on this Bet!</h2>
              <p>{this.props.publicKey}</p>
              <input type="number" placeholder="Your Bet Amount..." onChange={this.setAmount} />
              <div>
                <a href="#" onClick={this.submit}>
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
  })
};

Bet.defaultProps = {
  title: '',
  positiveItem: { name: "Yes", total: 12414 },
  negativeItem: { name: "No", total: 423 },
}

export default Bet;