bueno = [2,5,3,3,2,4];
malo = [22,5,13,3,42];

function Reductor (functionP, arr) {
	res = [];
	if(arr.length%2==0) {
		for (var i = 0; i < arr.length-1; i+=2) {
			nuevo = arr.slice(i,i+2);
			console.log('nuevo');
			res.push(
				nuevo.reduce(function (a,b){
				return functionP(a,b);
				})	
			)
			console.log(res);
		};
	}
	else {
		throw error;
	}
	return res;
};

function multiplicador(a,b){
	return a*b;
};

try{
	Reductor (multiplicador, malo);
}catch(e){
	console.log("La cantidad de elementos del array debe ser par");
};

try{
	Reductor (multiplicador, bueno);
}catch(e){
	console.log("La cantidad de elementos del array debe ser par");
};