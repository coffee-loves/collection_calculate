'use strict';
function addEven(arr,num){
  if(num%2===0){
    arr.push(num)
  }
}

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if (number_a<number_b){
    for (var i = number_a;i<=number_b;i++){
      if (i%2===0){
        addEven(result,i);
      }
    }
  }else if(number_a>=number_b){
    for (var i = number_a;i>=number_b;i--){
      if(i%2===0){
        addEven(result,i)
      }
    }
  }else{
    addEven(result,number_a)
  }
  return result;

}

module.exports = get_integer_interval_2;
