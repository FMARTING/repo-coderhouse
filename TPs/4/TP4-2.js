var arr = [1,1,2,3,5,8,13,21,34,55,89,144,233];
var i = arr.length-1;
// var a = 0;
var Inv = [];
// while(a < arr.length){
// 	Inv.push(arr[i]);
// 	i--;
// 	a++;
// }


for (var x = 0; x < arr.length; x++) {
	Inv.push(arr[i]);
	i--;
};
console.log(Inv);