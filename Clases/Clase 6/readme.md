#JAVASCRIPT#
-------------------------------------------------------------------------

##Funciones##
Ejercicio en clase 1:
Hacer una funcion que te devuelva todos los elementos pares dentro de un array

```
function buscarPares (arr) {
    var res = [];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] %2 == 0) {
            res.push(arr[i]);
        };
    };
    return res;
}

var imparesPares = [1,3,5,6,8,9,7,10]
var res = buscarPares(imparesPares);
console.log(res);
```

##Try Catch##

Lo utilizamos para evitar que arrastremos un error. Si algo da error, evita que se finalice la operacion y maneja el error dentro del catch

```
function agreganLength(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(
            "Expected arr to be an array, " +
            "but instead got: " + typeof arr
            );
    }
    arr.push(arr.length);
}

try {
    res = agreganLength("lalala");
}
catch (e) {
    //manejo el error que y como quiero
    console.log(e);
}
```

##Funciones con varios parametros##
si yo hago:
```
function test (parm1,param2) {
    console.log(param1, param2);
}
test ();
test (1);
test(1,2);
test (1,2,3);
```

En ninguno de estos casos, ni pasando parametros de mas ni pasando de menos, la funcion no te dice nada. Javascript no tira error, le pone un valor undefined.

Por eso los resultados serian:
```
undefined undefined
1 undefined
1 2
1 2
```

##Arguments##

Es parecido a un array pero no lo es. Le puedo usar length y otras. Pero push no, y si le hago typeof da object

```
function test (parm1,param2){
    console.log(arguments);
}
test(2,3);
< [2,3]

console.log(arguments.toString());
< [object Arguments]
```

Todos los objetos tienen una funcion que se llama toString(), que lo lleva a string.
En el caso de la de Arguments es mas primitiva y da algo raro, no da un string como en otros casos, sino que devuelve un string que parece una lista con dos elmentos, object y Arguments

##method borrowing##

Le pido prestado a otro objeto su metodo y lo aplico a otro que yo quiero.

Ej.: si yo quiero usar el metodo toString de arguments en un string, como hago?
Eso lo puedo hacer un con call()

Tanto el call como el apply me permite cambiar lo que esta a la izquierda del punto. es como si pudiese sacar lo que esta a la izquierda del punto, sino que va a aplicar la funcionalidad al primer parametro que pase dentro del call
```
Object.prototype.toString.call("str");
"[Object String]"
Object.prototype.toString.call([]);
"[Object Array]"
Object.prototype.toString.call(null);
"[Object Null]"
Object.prototype.toString.call(Arguments);
"[Object Arguments]"
```

Esto se podria utilizar para saber que objeto tengo.
Es mejor que typeof, podria combinar indexof y substring para hacer una funcion que me devuelva el tipo de objeto, ya que en este caso me devuelve el tipo para mas tipos que el typeof

En call(), el primer parametro cambia el objeto (cambio lo que esta a la izquierda del objeto), y con el resto de los parametros son parametros para la funcion que estoy aplicando, que la estoy pidiendo prestada de otro objeto.

*Typeof tambien se puede agregar a una funcion y me devuelve que es una funcion*

```
[].pop
< function pop()
var pop = [].pop
< undefined
typeof pop
< "function" 
pop()
< Uncaught TypeError (blablalba) //se quejo porque no tenia un objeto al cual aplicar el metodo. Cuando tendria que tener un Array
pop.call(["test"])
<"test" // y el Array creade para el metodo quedo vacio
var arr = ["test"]
<undefined
pop.call(arr);
<"test"
arr
<[]
```

En vez de guardar el metodo en una variable puedo ir a buscarlo a los prototipos que estan en el objeto primario

```
Array.prototype.push
<function pop()
arr.push === Array.prototype.push
<true
Array.prototype.push.call(arr, "un nuevo dato")
<1
arr
<["un nuevo dato"]
```

Los metodos de Array no chequean que a lo que se aplican sea un array, sino que se pueda acceder a los elementos del objeto introducido al metodo igualque como se accede a los elementos de un array. Esto pasa con Arguments

```
function test (param1,param2) {
    console.log(Aray.prototype.pop.call(arguments));
}
test(3,5);
<5
Array.prototype.pop.call("mi palabra");
<error porque String es inmutable
Array.prototype.slice.call("mi palabra",3);
<["p","a","l","a","b","r","a"]
Array.prototype.slice.call("mi palabra",3,5);
["p","a"]
```

## Apply ##

Es como un call que te completa los parametros de la funcion que llamas en base a un Array que le ingresas como parametro

Por lo tanto puedo ingresar parametros a traves de un Array, de esta manera ingreso parametros de una forma dinamica.

```
var params = [];
params.push(3);
params.push(5);

Array.prototype.slice.apply("mi palabra", params);
<["p","a"]
```

Si arme una funcion y la quiero pedir prestada con apply uso null:
```
function sumar() {
    var res = 0;
    for (var =0, i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
sumar(1,3);
< 4
var sumandos = [1,3,5,10,20]
sumar.apply(null, sumandos)
<39
```

##Scope de las variables##

Hay algo en Java que se llama hoisting, hace que no importa donde se define una variable. Java busca todos los statements que declaran una variable, y mueve arriba de todo las declaraciones *pero no las inicializaciones*
El ambito del hositing es dentro de la funcion

```
function f1() {
    console log("antes", v1);
    var v1 = 2;
    console log("despues", v1);
}
f1();
<antes undefined
<despues 2
```
Otro ejemplo de hoisting y su alcance
```
function f1() {
    console log("antes", v1);
    var v1 = 2;
    console log("despues", v1);
}
f1();
console.log(v1)
<antes undefined
<despues 2
v1 no esta definida
```

Los ambitos estan definidos por las funciones. El hoisting lo que hace es subir las declaraciones hasta arriba del ambito donde estan, pero si la variable fue declarada afuera, vale para los ambitos "hijos"

Ej.:
```
function f1(){
    console.log("v", v);
    console.log("antes",v1);
    var v1 = 2;
    console.log("despues",v1);

    function f2() {
        var v3 = 10;
        console.log("v", v);
        console.log("v2", v2);
        console.log("v3", v3);
    }
    f2();
}
var v = true;

f1();
<v true
<antes undefined
<despues 2
<v true
<v1 2
<v2 10
```

Si declaro a una variable en un ambito y la redefino esa variable vive solamente en ese ambito. En cambio si invoco a una variable de un ambito mas arriba y la modifico la estoy modificando "de raiz"

------------------------------------------------------------------

## forEach ##

```
[3,5,9].forEach(function(curEl, curIndex, arr){
    console.log(curEl, curIndex, arr);
    })
<3 0 [3,5,9]
<5 1 [3,5,9]
<9 2 [3,5,9]
```

```
var myArray = [3,5,9];

function hacerAlgo(curEl, curIndex, arr) {
    console.log(curEl, curIndex, arr);
}
for (var i = 0; i < myArray.length; i++) {
    hacerAlgo(myArray[i], i,myArray);
}
```

----------------------------------

**Ejercicio en Clase:**
Realizar una funcion que reciba un array y una funcion de comparacion y que mediante el uso explicito de forEach contabilice los elementos del array pasado que al aplicarle la funcion recibida por parametro al elemento actual del forEach esta devuelva true

```
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
```

Si meto una funcion como parametro la tengo que ingresar sin los parentesis, porque sino la estaria ejecutando sin paramentros ingresados. En cambio yo quiero que lo tome como una function