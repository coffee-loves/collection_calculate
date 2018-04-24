function collect_same_elements(collection_a, collection_b) {
  //将b集合变为一维数组
  var result = [];
  for (var i = 0;i<collection_b.length;i++){
    if (!Array.isArray(collection_b[i])){
      result.push(collection_b[i])
    }
    else {
      for (var j =0;j<collection_b[i].length;j++){
        result.push(collection_b[i][j])
      }

    }

  }


  //求交集
  return collection_a.filter(function(value){
    return result.includes(value);
  });

}

module.exports = collect_same_elements;
