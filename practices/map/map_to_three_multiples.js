'use strict';
var map_to_three_multiples = function(collections){
//  return [3,9,15,12,27];
  var three_multiples = collections.map(function (item) {
    return item*3;
  })
  return three_multiples;
};

module.exports = map_to_three_multiples;
