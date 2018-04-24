'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var col = collection.filter(function (value) {

    return value%3==0;  //filter返回的是布尔值！
    // }
  })
  return col;
}

module.exports = choose_multiples_of_three;
