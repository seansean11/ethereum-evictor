pragma solidity ^0.4.8;

contract Escrow {

  address owner = msg.sender;
  string description;
  uint fee = 1;
  uint fee2 = fee/100;

  struct Bettor {
    address bettor;
    bool side;
    uint amount; /*wei*/
    uint timeOfBet;
    uint ownerFee;
  }

  uint numBettors;
  mapping (uint => Bettor) bettors;


  function Escrow(string _description) {
    owner = msg.sender;
    description = _description;
    numBettors = 0;
  }

  function totalBets() returns (uint trueBets, uint falseBets){
    trueBets = 0;
    falseBets = 0;

    for(uint i1 = 0; i1 < numBettors; i1++ ){
      Bettor b = bettors[i1];
      if (b.side){
        trueBets += b.amount;
      } else {
        falseBets += b.amount;
      }
    }
    return;
  }

  function newBet(bool _side) payable returns (bool betCreated) {
    numBettors++;
    Bettor b = bettors[numBettors];
    b.bettor = msg.sender;
    b.side = _side;
    b.amount = msg.value * (1 - fee2);
    b.timeOfBet = now;
    betCreated = true;
    b.ownerFee = msg.value * fee2;
  }


  function payOut(bool outcome) { /*pay the winner*/
    uint winnersBets = 0;
    uint losersBets = 0;
    uint ownerSum = 0;

    for (uint i = 0; i < numBettors; i++){
      Bettor b = bettors[i];
      ownerSum += b.ownerFee;
      if (b.side == outcome){
        winnersBets += b.amount;
      } else {
        losersBets += b.amount;
      }
    }

    owner.transfer(ownerSum);

    for (uint j = 0; j < numBettors; j++){
      Bettor c = bettors[j];
      if (c.side == outcome){
        uint pay = (c.amount / winnersBets * losersBets) + c.amount;
        c.bettor.transfer(pay);
      }
    }

  }

}
