'use strict';

function choose_even(collection) {//filter()不需要写循环，写过滤条件即可

  var choose_even = collection.filter(function (x){
    if (x%2==0 || x==0){
      return x;
    }
  })
  return choose_even;
  //在这里写入代码
}

module.exports = choose_even;
