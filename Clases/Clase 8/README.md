NODE.JS
-----------------------------------------------------

Para empezar a utilizar Node lo que tengo que hacer es ejecutar el command prompt con Node.js

Ejercicio:
escribir un programa que devuelva la suma de toods los parametros que recibe el proceso de node
Los parametros se separan por espacio y si un parametro esta separado se une como comillas Ej. params.js "param2 param3"
El primer parametro siempre siempre va  ser node y el segundo param.js

Replicar lo hecho usando (map slice reduce) en Suma2.js - No llegue a hacerlo

Ejercicio:
Se pide hacer un programa que imprima el resultado de haber concatenado el contenido de archivos especificadpos por parametro. Nota: el resultado tiene que ser en el orden qeu se pasaron los nombres de archivos

```
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
```

settimeout es asincronico, el primer parametro es lo ejecutado y el segundo es la cantidad de milisegundos despues de tener los resultados asincronicos que se va a ejecutar el primer parametro
```
for (var i =0; i<10;i++){
    setTimeout(function test (){
        console.log(i);
    },0)
}
```
Yo puedo crear funciones dentro de funciones y la funcion interna va a mantener su valor incluso fuera de la anterior, pese a que la "Madre" muera enc ada vuelta de un loop

Solucion a la impresion en consola de varios archivos en el orden en que fueron ingresados

```
var fs = require('fs');

var curFilename;
var filenames = process.argv.slice(2);
var filesContents = [];
var processed = 0;
var i;

function createReadHandler(pos) {
    return function (err, content){

        var result;

        processesd++;
        if (err){
            console.log(err)
            return;
        }
        filesContents[pos]=content;

        if (processed === filenames.length){
            result = filesContents.reduce(function(prevContent, curContent) {
                return prevContent + curContent;
                }, "");
                //    result = "";
                //    for (var i = 0; i < filesContents.length; i++) {
                //        if (typeof filesContents[i] !== "undefined") {
                //              result += filesContents[i];
                //        }
                //    }
                console.log(result);
        }
    };
}

for (i = 0; i < filenames.length;i++){
    curFilename = filenames[i];
    fs.readFile(curFilename, 'UTF8', createReadHandler(i));
}


```

Ejercicio: Hacer un programa que reciba un directorio por parametro e imprima 1 sola vez por consola, los directorios contenidos en este 

```
fs.stat('box-model', function onDone(err, stat){
    console.log(stat.isDirectory());
    });
```

readdir nos va a devolver el array con cada archivo en el directorio. Y a cada uno hay que correrle el fs.stat, y este devuelve un objeto stat, y si es directory lo acumulamos y al ultimo cuando no haya mas.

resultado:
```
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
```
