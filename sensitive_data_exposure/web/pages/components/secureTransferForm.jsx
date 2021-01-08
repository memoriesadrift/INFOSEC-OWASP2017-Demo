import React, { Component } from 'react';
import { secureSendFunds } from '../../web3/users'

class SecureTransferForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        accountId: '',
        password: '',
        targetId: '',
        amount: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    async handleSubmit(event) {
        event.preventDefault();
        const result = await secureSendFunds(this.state.accountId, this.state.targetId, this.state.password, this.state.amount);
        let returnValue = "Transferred " + this.state.amount + " from " + this.state.accountId + " to " +  this.state.targetId + ".";
        if(!result) returnValue = "Error, no money was transferred! Check with MetaMask for Errors before submitting transaction!"
        this.props.parentCallback(returnValue);
    }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value 
    });
  }

  render() {
    return (
        <div>
            <form>
                <label>
                    Your account ID: 
                    <input
                        name="accountId"
                        value={this.state.accountId}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Your password: 
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Target account ID: 
                    <input
                        name="targetId"
                        value={this.state.targetId}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Transfer amount:
                    <input
                        name="amount"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleInputChange} />
                </label>
                <br />
            </form>
            <button onClick={this.handleSubmit}>Transfer</button>
    </div>
    );
  }
}

export default SecureTransferForms;

