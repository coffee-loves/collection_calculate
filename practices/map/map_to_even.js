'use strict';
function map_to_even(collection){

  var time2 = collection.map(function(item){  //使用map省去了循环的步骤；
    return item*2;
  });
  return time2;
//  return [2,4,6,8,10];
}
module.exports = map_to_even;
