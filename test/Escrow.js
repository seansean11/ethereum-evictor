var Escrow = artifacts.require("Escrow.sol");

contract('Escrow', function(totalBets) {

  it("...should store the value 89.", function() {
    return Escrow.deployed().then(function(instance) {
      escrowInstance = instance;

      return escrowInstance.set(89, {from: accounts[0]});
    }).then(function() {
      return escrowInstance.get.call();
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });

});
