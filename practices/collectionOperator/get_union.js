'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
//  var collection_a = [10, 27, 28, 19, 5];
//  var collection_b = [5, 78, 28, 19, 23];
//  var collection_c = [10, 27, 28, 19, 5, 78, 23];

  var clone_a = collection_a.slice(0);
  var clone_b = collection_b.slice(0);
  var intersection = [];

  //计算交集intesection
  for(var i = 0;i<5;i++){
    for (var j = 0;j<5;j++){
      if (clone_a[i] == clone_b[j]){
        intersection.push(clone_b[j]);                  //push,pop只能操作边缘的数据,而splice和slice可以操作中间的数据
      }

    }
  }
  //删除b中含有的交集部分
  for(var m =0;m<clone_b.length;m++){
    for (var n = 0;n<intersection.length;n++){
      if (clone_b[m]==intersection[n]){
        clone_b.splice(m,1);
      }
    }
  }


  var collection_c = clone_a.concat(clone_b);
  return collection_c;
}

module.exports = get_union;

