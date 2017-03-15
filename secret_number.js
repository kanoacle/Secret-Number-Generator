'use strict';
module.exports = function() {
  //private
  function createSecretNumber(){
    return Math.floor(Math.random() * 1000000);
  }
  var secretNumber = createSecretNumber();
  //public
  function getSecretNumber(){
    return secretNumber;
  }
  return getSecretNumber;
};