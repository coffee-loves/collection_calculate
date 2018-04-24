'use strict';

function choose_no_repeat_number(collection) {
  //计算元素个数
  collection.sort();
  var result = {};
  for (var i=0;i<collection.length;){
    var count =0;
    for (var j = i;j<collection.length;j++){
      if(collection[i]==collection[j]){
        count++;
      }
    }
    result[collection[i]] = count;
    i = i+count;
  }

  //挑出个数为1的元素
  var single = [];
  for (var key in result){
    if (result[key] == 1){
      single.push(Number(key));
    }

  }
  return single;
}

module.exports = choose_no_repeat_number;
