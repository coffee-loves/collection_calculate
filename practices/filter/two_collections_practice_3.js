'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var collection_c = [];
  for (var i = 0;i<=collection_a.length;i++){
    for (var j = 0;j<=collection_b.length;j++){
      if (collection_a[i]%collection_b[j] == 0){
        collection_c.push(collection_a[i]);
      }
    }
  }
//  console.log(collection_a);
  // console.log(collection_b);

  return collection_c;

}

module.exports = choose_divisible_integer;
