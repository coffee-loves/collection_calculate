function collect_same_elements(collection_a, object_b) {
  //a,b数组
  var collectionA = []
  for (var i =0;i<collection_a.length;i++){
    collectionA.push(collection_a[i].key)
  }

  var collectionB = object_b.value;

  //求交集
  return collectionA.filter(function(value){
    return collectionB.includes(value);
  });


}

module.exports = collect_same_elements;
