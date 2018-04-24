'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for (var i = 0;i<collection.length;i++){
    if (!Array.isArray(collection[i])){
      result.push(collection[i])
    }
    else {
      for (var j =0;j<collection[i].length;j++){
        result.push(collection[i][j])
      }

    }

  }

  for(var m = 0;m<result.length;m++){
    var temp = 0;
    var count = 0;
    temp = result[m];
    for (var n = 0;n<result.length;n++){
      if (temp == result[n]){
        count ++;
      }
      if (count >1){
        result.splice(n,1);
      }
    }
  }



  return result;


}

module.exports = double_to_one;
