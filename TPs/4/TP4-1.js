var cadena = "Hola Coderhouse";
var i = cadena.length-1;
// var a = 0;
var Inv = "";
// while(a < cadena.length){
// 	Inv = Inv + cadena[i];
// 	i--;
// 	a++;
// }

for (var x = 0; x < cadena.length; x++) {
	Inv = Inv + cadena[i];
	i--;
};

console.log(Inv);