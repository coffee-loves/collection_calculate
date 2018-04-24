'use strict';
function rank_by_two_large_one_small(collection){

    //冒泡排序
    for(var i = 0;i<collection.length-1;i++){
      for(var j = 0;j<collection.length-i-1;j++){
        if(collection[j]>collection[j+1]){
          var swap = collection[j];
          collection[j]=collection[j+1];
          collection[j+1]=swap;
        }
      }
    }

    var result = [];
  for (var i = 0;i<collection.length;i++){

    // if(elements.length>=0){

    result.push(collection[1]);
    result.push(collection[2]);
    result.push(collection[0]);
    collection.splice(0,3)

//  }

  }
  return result.concat(collection);


}
module.exports = rank_by_two_large_one_small;
