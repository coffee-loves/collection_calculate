'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (var a = 0;a<collection.length;a++){
    if (collection[a]%2==0){
      return collection[a];
      break;
    }
  }
}

module.exports = find_first_even;

