'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  function numToChar (number) {
    if(number>0&&number<=26){
      return String.fromCharCode(i+96)
    }else if(number >=27 && number <=52){
      var resulta = String.fromCharCode(i+70);
      return 'a'+resulta;
    }else if (number>=53){
      var resultb = String.fromCharCode(i+44);
      return 'b'+resultb;
    }
  }
  var result = [];

  if(number_a<=number_b){
    for(var i = number_a;i<=number_b;i++){
      result.push(numToChar(i))
    }
  }else if (number_a>number_b){
    for(var i = number_a;i>=number_b;i--){
      result.push(numToChar(i))
    }
  }


  return result;

}

module.exports = get_letter_interval_2;

