const MoneyExchange = artifacts.require('MoneyExchange');

module.exports = (deployer) => {
  deployer.deploy(MoneyExchange);
}
