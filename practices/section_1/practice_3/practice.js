function collect_same_elements(collection_a, object_b) {
  //取出数组
  var collection = object_b.value;


  //取交集
  return collection_a.filter(function(value){
    return collection.includes(value);
  });

}

module.exports = collect_same_elements;
