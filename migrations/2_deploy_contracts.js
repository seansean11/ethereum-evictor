var evictor = artifacts.require("./evictor.sol");


module.exports = function(deployer) {
  deployer.deploy(evictor);
};
