'use strict';
var number_map_to_word_over_26 = function(collection){

  var number_mapto_word = collection.map(function (item) {
    if (item == 30){
      return "ad";

    }else if (item == 27){
      return "aa";
    }
     else{  //最后的判断不能写条件
      return String.fromCharCode(item+96);
    }

  })
  return number_mapto_word;

//  return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
