function buscarPares (arr) {
	var res = [];
	if (!Array.isArray(arr)) {
		return alert("Se debe ingresar un Array");
	}
	for (var i = 0; i <= arr.length; i++) {
		if (arr[i] %2 == 0) {
			res.push(arr[i]);
		}
	}
	return res;
}

console.log(buscarPares("Hola Mundo"));

function agreganLength(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(
            "Expected arr to be an array, " +
            "but instead got: " + typeof arr);
    }
    arr.push(arr.length);
}

try {
	agreganLength("lalala");
}
catch (e) {
    //manejo el error que quiero
    console.log(e);
}

function esPar(el) {
    return el%2==0;
}

function filtrado (arr, functionP) {
    var res = 0;
    arr.forEach(function(curEl, curIndex, arr){
        if (functionP(curEl)){
            res++;
        }
    });
    return res;
}