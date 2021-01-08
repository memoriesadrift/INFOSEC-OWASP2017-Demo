const MoneyExchange = artifacts.require('MoneyExchange');
const SecureMoneyExchange = artifacts.require('SecureMoneyExchange');

module.exports = (deployer) => {
  deployer.deploy(MoneyExchange);
  deployer.deploy(SecureMoneyExchange);
}
