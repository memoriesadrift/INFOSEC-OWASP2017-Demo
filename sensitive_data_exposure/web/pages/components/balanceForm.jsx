import React, { Component } from 'react';
import { viewAccountBalance } from "../../web3/users";
import MoneyExchange from "../../web3/artifacts/MoneyExchange.json";

class BalanceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    async handleSubmit(event) {
        event.preventDefault();
        const result = await viewAccountBalance(parseInt(this.state.value));
        const returnValue = 'Balance for account:' + this.state.value + ' is ' + result;
        this.props.parentCallback(returnValue);
    }

  render() {
    return (
        <div>
            <h4>View Account Balance</h4>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter Account ID:  
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default BalanceForm;

