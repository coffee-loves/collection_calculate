'use strict';

function choose_no_common_elements(collection_a, collection_b) {

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

  for(var m =0;m<collection_a.length;m++){
    for (var n = 0;n<collection_c.length;n++){
      if (collection_a[m]==collection_c[n]){
        collection_a.splice(m,1);
 //       collection_a.pop(collection_a[m])
      }
    }
  }

  return collection_a;
}

module.exports = choose_no_common_elements;
