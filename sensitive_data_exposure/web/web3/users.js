import { eth, getInstance } from './provider'

import MoneyExchange from "./artifacts/MoneyExchange.json"

export const getUserInfo = async (userId) => {
  const exchange = await getInstance(MoneyExchange)
  const profile = await exchange.users.call(userId)

  return profile
}
