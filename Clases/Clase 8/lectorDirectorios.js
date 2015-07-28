var fs = require('fs');
var path = require('path');
var resultado = [];
var ruta = process.argv[2];

function directorios() {	
	fs.readdir(ruta, function(err, files) {
		var i;
		var processed =0;
		
		if (err) {
			console.log("hay un error: " + err);
			return;
		}

		for (i=0; i < files.length;i++){

			var absFilename = path.join(ruta,files[i]);

			fs.stat(absFilename, function onDone(err, result){
				processed++;
				if(err){
					console.log("hay un error: " + err);
					return;
				}
				if (result.isDirectory()) {
					resultado.push(absFilename);
					
				}
				if (processed === files.length){
					console.log(resultado);
				}
			});
		}

	})

}

directorios();