'use strict';
var map_to_four_multiples_add_one = function(collection){
//  return [5,9,13,17,21];
  var time4plus1 = collection.map(function(item){
    return item*4+1;
  });
  return time4plus1;
};

module.exports = map_to_four_multiples_add_one;
