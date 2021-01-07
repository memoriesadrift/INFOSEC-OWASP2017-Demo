import contract from "truffle-contract"

export const getInstance = artifact => {
  const contractObj = contract(artifact)
  contractObj.setProvider(provider())

  return contractObj.deployed();
}
