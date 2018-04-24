'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码

//  var collection_a = [10, 27, 28, 19, 5];
//  var collection_b = [5, 78, 28, 19, 23];

  var collection_c = [];
  for (var i = 0;i<5;i++){
    for (var j = 0;j<5;j++){
      if (collection_b[i]===collection_a[j]){
        collection_c.push(collection_a[j]);
      }
    }
  }
//  console.log(collection_a);
 // console.log(collection_b);
  return collection_c;


}

module.exports = get_intersection;
