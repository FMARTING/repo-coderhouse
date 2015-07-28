var fs = require('fs');

function concatenador() {
	var resultado = "";
	var index = 0;
	var contador =2;
	for (var i = 2 ; i < process.argv.length; i++) {
		fs.readFile(process.argv[i], function(err, result){
			if (err){
				console.log("Hubo un error: " + err);
				return;
			}
			result.toString();
			contador++;
			resultado += result;
			if(contador == process.argv.length){
				console.log(resultado);
			}
		});
	}
}

concatenador();