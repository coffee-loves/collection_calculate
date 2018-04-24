//var a = [1,2,5];
//var b = [[4,5],6,7];
//a.reduce(function (a));
//var c = a.concat(b);
//var clone = a.slice(0);
// var collection_a = [4,7,9,25,16,21,64,32,35,49];
// var collection_b = [2,3,5];
//
// var rank_by_two_large_one_small = function(collection_a,collection_b){
//   var collection_c = [];
//   for (var i = 0;i<=collection_a.length;i++){
//     for (var j = 0;j<=collection_b.length;j++){
//       if (collection_a[i]%collection_b == 0){
//         console.log(collection_a[i]%collection_b[j]);
//         collection_c.push(collection_a[i]);
//       }
//     }
//   }
// //  console.log(collection_a[0]);
// //  console.log(collection_b[j]);
//  // console.log(collection_c);
//   return collection_c;
//
//
// };
//
//
// var result = rank_by_two_large_one_small(collection_a,collection_b);
//var collection = 1;

var collection = [20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53];

var medium =Math.round((collection.length -1)/2);
console.log(collection[medium]);
