'use strict';

function choose_common_elements(collection_a, collection_b) {

  var collection_c = [];
  for (var i = 0;i<=8;i++){
    for (var j = 0;j<=5;j++){
      if (collection_b[j]===collection_a[i]){
        collection_c.push(collection_a[i]);
      }
    }
  }
//  console.log(collection_a);
  // console.log(collection_b);
  return collection_c;
}

module.exports = choose_common_elements;
