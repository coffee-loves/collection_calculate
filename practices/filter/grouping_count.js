'use strict';

function grouping_count(collection) {

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
  return result;
}

module.exports = grouping_count;
