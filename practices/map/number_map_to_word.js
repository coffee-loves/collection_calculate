'use strict';
var number_map_to_word = function(collection){

var  number_mapto_word = collection.map(function (item) {
  return String.fromCharCode(item+96);
})
  return number_mapto_word;
//  return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
