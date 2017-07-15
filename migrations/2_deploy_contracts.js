var evictor = artifacts.require("Escrow.sol");


module.exports = function(deployer) {
  deployer.deploy(evictor);
};
