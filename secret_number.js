'use strict';
module.exports = function() {

//private
  var secretNumber = createSecretNumber();

  function createSecretNumber(){
    return Math.floor(Math.random() * 1000000);
  }

//public
  function getSecretNumber(){
    return secretNumber;
  }

  return getSecretNumber;
};