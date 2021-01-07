import React from 'react'
import { eth, getInstance } from "../web3/provider"

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <h1> A Serious Banking dApp! </h1>
                <h2>Transfer Money</h2>
                <p>Enter Your Account ID: </p>
                <p>Enter Your Password: </p>
                <p>Enter Target ID: </p>
                <p>Enter Transfer Amount: </p>
                <h2>View Balance</h2>
                <p>Enter Account ID: </p>
                <h2>View Account</h2>
                <p>Enter Account ID: </p>
            </div>
        )
    }
}
