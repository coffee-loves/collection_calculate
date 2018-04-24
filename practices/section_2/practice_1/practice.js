function count_same_elements(collection) {


  var result = [];

  for(var i =0;i<collection.length;){
    var count =0;
    for (var j = i;j<collection.length;j++){
      if(collection[i]==collection[j]){
        count ++;
      }

    }
    var temp = {};
    temp['key']=collection[i];
    console.log(temp);
    temp ['count']= count;
    result.push(temp);
    i = i+count;
  }
  return result;

}

module.exports = count_same_elements;
