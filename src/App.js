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
      storageValue: 0,
      web3: null
    };
  }

  componentDidMount() {
    console.log(this.props.children);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract('Will Mcgregor beat Mayweather at the August 26th, 2017 fight?');
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
      escrow.deployed().then((instance) => {
        escrowInstance = instance
        return escrowInstance.set(5, {from: accounts[0]});
      }).then((result) => {
        return escrowInstance.get.call(accounts[0]);
      }).then((result) => {
        console.log(result.c[0]);
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">BetBox</a>
        </nav>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App
