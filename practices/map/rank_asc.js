'use strict';

    var rank_asc = function(collection) {

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

      return rank_asc(left).concat([pivot], rank_asc(right));

    };

//arrayObject.concat(arrayX,arrayX,......,arrayX),把所有 arrayX 参数添加到 arrayObject 中

//  return [6,5,4,3,2];


module.exports = rank_asc;
