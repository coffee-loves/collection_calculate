'use strict';
var even_asc_odd_desc = function(collection){

  //分奇数组和偶数组
  var odd = []
  var even = []
  for(var i=0;i<collection.length;i++){
    if (collection[i]%2==0){
      even.push(collection[i])
    }
    else {
      odd.push(collection[i])
    }

  }

  var rank_asc = function(collection) {

    if (collection.length <= 1) { return collection; }

    var pivotIndex = Math.floor(collection.length / 2);

    var pivot = collection.splice(pivotIndex, 1)[0];

    var left = [];

    var right = [];

    for (var i = 0; i < collection.length; i++){

      if (collection[i] < pivot) {

        left.push(collection[i]);

      } else {

        right.push(collection[i]);

      }

    }

    return rank_asc(left).concat([pivot], rank_asc(right));

  };

  var rank_desc = function(collection) {

    if (collection.length <= 1) { return collection; }

    var pivotIndex = Math.floor(collection.length / 2);

    var pivot = collection.splice(pivotIndex, 1)[0];

    var left = [];

    var right = [];

    for (var i = 0; i < collection.length; i++){

      if (collection[i] > pivot) {

        left.push(collection[i]);

      } else {

        right.push(collection[i]);

      }

    }

    return rank_desc(left).concat([pivot], rank_desc(right));

  };



  var result = rank_asc(even).concat(rank_desc(odd));
  return result;

};
module.exports = even_asc_odd_desc;
