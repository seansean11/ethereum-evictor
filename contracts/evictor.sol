pragma solidity ^0.4.8;

contract Escrow {

  address owner;

  struct Bettor {
    address bettor;
    bool side;
    uint amount; /*wei*/
    uint timeOfBet;
  }

  uint numBettors;
  mapping (uint => Bettor) bettors;

  function Escrow() {
    owner = msg.sender;
    numBettors = 0;
  }

  function newBet(bool _side, uint _amount) returns (bool betCreated) {
    numBettors++;
    Bettor b = bettors[numBettors];
    b.bettor = msg.sender;
    b.side = _side;
    b.amount = _amount;
    b.timeOfBet = now;
    betCreated = true;
  }



  /*mapping (address => uint) balances;

  address public user1;
  address public user2;
  address escrow = msg.sender;
  bool user1Approve;
  bool user2Approve;

  function setup(address user1, address user2){
    if(msg.sender == escrow){
        user1 = user1;
        user2 = user2;
    }
  }

  function approve(){
    if(msg.sender == user2) user2Approve = true;
    else if(msg.sender == user1) user1Approve = true;
    if(user1Approve && user2Approve) fee();
  }

  function abort(){
      if(msg.sender == user2) user2Approve = false;
      else if (msg.sender == user1) user1Approve = false;
      if(!user1Approve && !user2Approve) refund();
  }

  function payOut(){
    if(user1.send(this.balance)) balances[user2] = 0;
  }

  function deposit(){
      if(msg.sender == user2) balances[user2] += msg.value;
      else throw;
  }

  function killContract() internal {
      selfdestruct(escrow);
      //kills contract and returns funds to user2
  }

  function refund(){
    if(user2Approve == false && user1Approve == false) selfdestruct(user2);
    //send money back to recipient if both parties agree contract is void
  }

  function fee(){
      escrow.send(this.balance / 100); //1% fee
      payOut();
  }*/

}
