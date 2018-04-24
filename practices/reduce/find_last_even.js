'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for (var a = collection.length;a>0;a--){
    if (collection[a]%2 == 0){
      return collection[a];
      break;
    }
  }
}

module.exports = find_last_even;
