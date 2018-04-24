'use strict';

function choose_even(collection) {//filter()不需要写循环，写过滤条件即可

  var col = collection.filter(function (value) {

    return value%2==0;  //filter返回的是布尔值！
    // }
  })
  return col;
  //在这里写入代码
}

module.exports = choose_even;
