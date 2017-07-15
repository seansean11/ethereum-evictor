import React, { Component } from 'react'
import PropTypes from "prop-types";
import EscrowContract from '../build/contracts/Escrow.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      publicKey: '',
      web3: null,
      title: 'Will Mcgregor beat Mayweather at the August 26th, 2017 fight?'
    };

    this.makeBet = this.makeBet.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3,
        contract: null
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract(this.state.title);
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract');
    const escrow = contract(EscrowContract);
    escrow.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on escrow.
    var escrowInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      escrow.deployed(this.state.title).then((instance) => {
        escrowInstance = instance;
        escrowInstance.totalBets.call().then(value => {
          console.log(value);
          this.setState({
            contract: escrowInstance,
            publicKey: accounts[1],
            positiveItem: value[0][0],
            negativeItem: value[1][0]
          });
        });
      });
    })
  }

  makeBet(boolBet, value) {
    this.state.contract.newBet.sendTransaction(boolBet, { 
      from: this.state.publicKey,
      value: parseInt(value), gas: 900000
    }).then(result => console.log(result));
  }

  totalBets() {
    
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">BetBox</a>
        </nav>
        <main className="container">
          {React.cloneElement(this.props.children, {
            publicKey: this.state.publicKey,
            makeBet: this.makeBet,
            positiveItem: this.state.positiveItem,
            negativeItem: this.state.negativeItem
          })}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App
