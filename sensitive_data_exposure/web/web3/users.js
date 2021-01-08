import { eth, getInstance } from './provider'
const ethUtils = require('web3-utils');

import MoneyExchange from "./artifacts/MoneyExchange.json"
import SecureMoneyExchange from "./artifacts/SecureMoneyExchange.json"

export const getUserInfo = async (userId) => {
  const exchange = await getInstance(MoneyExchange)
  const profile = await exchange.users.call(userId)

  return profile
}

export const viewAccountBalance = async (userId) => {
  const exchange = await getInstance(MoneyExchange)
  const balance = await exchange.viewAccountBalance(userId);

  return parseInt(balance);
}

export const sendFunds = async (fromAcc, toAcc, password, amt) => {
  const exchange = await getInstance(MoneyExchange)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    const result = await exchange.sendFunds(
      parseInt(fromAcc), parseInt(toAcc), ethUtils.fromAscii(password), parseInt(amt),
    {
      from: addresses[0],
    })

    return true;
  } catch (err) {
    console.error("Err:", err)
    return false;
  }
}

export const setupAccount = async (username, password) => {
  const exchange = await getInstance(MoneyExchange)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    const result = await exchange.setupAccount(
      ethUtils.fromAscii(username), ethUtils.fromAscii(password),
    {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }
}

// Note: this method will always fail as the vulnerability has been addressed!
export const secureGetUserInfo = async (userId) => {
  const exchange = await getInstance(SecureMoneyExchange)
  const profile = await exchange.users.call(userId)

  return profile
}

export const secureViewAccountBalance = async (userId) => {
  const exchange = await getInstance(SecureMoneyExchange)
  const balance = await exchange.viewAccountBalance(userId);

  return parseInt(balance);
}

export const secureSendFunds = async (fromAcc, toAcc, password, amt) => {
  const exchange = await getInstance(SecureMoneyExchange)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    const result = await exchange.sendFunds(
      parseInt(fromAcc), parseInt(toAcc), ethUtils.fromAscii(password), parseInt(amt),
    {
      from: addresses[0],
    })

    return true;
  } catch (err) {
    console.error("Err:", err)
    return false;
  }
}

export const secureSetupAccount = async (username, password) => {
  const exchange = await getInstance(SecureMoneyExchange)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    const result = await exchange.setupAccount(
      ethUtils.fromAscii(username), ethUtils.fromAscii(password),
    {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }
}
