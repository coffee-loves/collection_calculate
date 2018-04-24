'use strict';
var is_exist_element = function(collection,element){

  //选出下标为偶数的元素

  var even=[];
  for (var i = 0;i<collection.length;i++){
    if (i%2 == 0){
      even.push(collection[i]);
    }
  }

  //判断even是否包含element
  var result = true;
  var value = even.filter(function(item){
     return  item == element;
  })

  if (value.length>0){
    result = true;
  }
  else
  {
    result = false;
  }

  return result;
};
module.exports = is_exist_element;
