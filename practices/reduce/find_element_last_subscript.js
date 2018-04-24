'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for (var a = collection.length;a>=0;a--){
    if (collection[a]==element){
      return a;
    }
  }
}

module.exports = calculate_elements_sum;
