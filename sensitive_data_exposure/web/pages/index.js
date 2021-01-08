import React from 'react'
import { eth, getInstance } from "../web3/provider"
import TransferForm from './components/transferForm';
import BalanceForm from './components/balanceForm';
import AccountForm from './components/accountForm';
import SecureTransferForm from './components/secureTransferForm';
import SecureBalanceForm from './components/secureBalanceForm';
import SecureAccountForm from './components/secureAccountForm';
import { setupAccount, secureSetupAccount } from "../web3/users";

export default class IndexPage extends React.Component {
    state = {
        displayData: "Data will be displayed here after you execute a Query"
    }

    displayPassedData = (childData) => {
      this.setState({displayData: childData})
    }

    async componentDidMount() {
        try {
            await ethereum.enable() // Prompt user to let our DApp access their addresses
            const addresses = await eth.getAccounts() // Get user's ETH addresses
        } catch (err) {
            console.error("User denied access to their ETH addresses!")
        }
    }

    setupExample = async () => {
        const tx1 = await setupAccount("Bob", "bob123");
        const tx2 = await setupAccount("Alice", "alice123");
        const stx1 = await secureSetupAccount("Bob", "bob123");
        const stx2 = await secureSetupAccount("Alice", "alice123");
        alert("Example Setup! Bob's Account ID is 1, Alice's is 2.");
    }
    
    render() {
        /*// Vulnerable version of the dApp
        return (
            <div>
                <h1>A Serious Banking dApp</h1>
                <button onClick={this.setupExample}>Setup the Vulnerability Example!</button>
                <TransferForm parentCallback={this.displayPassedData}/>
                <BalanceForm parentCallback={this.displayPassedData}/>
                <AccountForm parentCallback={this.displayPassedData}/>
                <p style={{whiteSpace: 'pre-wrap'}}>{this.state.displayData}</p> 
            </div>
        )
            */ 
        // Secured version of the dApp
        return (
            <div>
                <h1>A Seriously Secure Banking dApp</h1>
                <button onClick={this.setupExample}>Setup the Vulnerability Example!</button>
                <SecureTransferForm parentCallback={this.displayPassedData}/>
                <SecureBalanceForm parentCallback={this.displayPassedData}/>
                <SecureAccountForm parentCallback={this.displayPassedData}/>
                <p style={{whiteSpace: 'pre-wrap'}}>{this.state.displayData}</p> 
            </div>
        )
    }
}
