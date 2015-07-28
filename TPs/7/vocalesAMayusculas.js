var fs = require('fs');

function vocalesAMayusculas() {
	var resultado = "";
	var resFinal ="";
	var index = 0;
	fs.readFile(process.argv[2], function(err, result){
		
		if (err){
			
			console.log("Hubo un error: " + err);
			return;
		
		}
		
		if (result) {

			resultado = result.toString();

			for (var i = 0; i < resultado.length; i++) {
					
				if (resultado.charAt(i) === "a" ||
					resultado.charAt(i) === "e" ||
					resultado.charAt(i) === "i" ||
					resultado.charAt(i) === "o" ||
					resultado.charAt(i) === "u"){

					resFinal += resultado.charAt(i).toUpperCase();

				}
				
				else{
				
					resFinal += resultado.charAt(i);
				
				}
			};

			fs.writeFile('miArchivoDeTextoMayus.txt', resFinal, function (err) {
  				if (err) throw err;
				  console.log('Ya se guardo el nuevo archivo');
			});

		};
	});
};

vocalesAMayusculas();