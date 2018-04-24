'use strict';

function compute_median(collection) {
  //在这里写入代码

  var result;
  if (collection.length%2==1){
    var index = Math.floor(collection.length/2)
    result = collection[index]
  }
  else {
    var indexEven = collection.length/2;
    result = (collection[indexEven]+collection[indexEven-1])/2
  }

return result;

}

module.exports = compute_median;


