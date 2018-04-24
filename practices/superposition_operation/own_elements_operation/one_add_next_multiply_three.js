'use strict';
function one_add_next_multiply_three(collection){

  var collection2 = [];
  for(var i =0;i<collection.length-1;i++){
    collection2.push(collection[i]);
  }
  console.log(collection2);
  var result =collection2.map(function(item){
    return   (item+item+2)*3;
  })

  console.log(result);
  return result;

}

module.exports = one_add_next_multiply_three;
