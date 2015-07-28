function suma(){

    var total=0;
    for(var i=2;i < process.argv.length;i++){
        total += Number(process.argv[i]);
    }
    return total;
}

console.log(suma());

// este archivo lo que hace cuando ejecuto node es tomar los parametros y
//devolverme la suma de los mismos.
//lo ejecuto con node suma param1 param2 param3