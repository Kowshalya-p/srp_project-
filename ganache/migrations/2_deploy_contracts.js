const NFCVerification = artifacts.require("NFCVerification");

module.exports = function (deployer) {
  deployer.deploy(NFCVerification);
};
