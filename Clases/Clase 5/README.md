#Seguimos con Javascript#
---------------------------------------------------------------------

#Loops#

##While##
While (valor inicial; condicion ; operacion al final de cada bucle) {stmt};
El bucle while realiza el statement entre {} mientras la condicion impuesta a la variable declarada se cumpla.

##For##
Todas las partes del for son opcionales, se pueden declarar o no
Siempre que haya mas de una condicion es mejor pasarlo al while, porque queda mas claramente expresado

for (ini_stmt;cond_expr;post_expr) stmt;
Ej.:
```
var i;
for (i = 0; i < 10; i++) {
    console.log(i);
    console.log(i*2)
}
```

##Switch##
Acorde a una expresion analiza y aplica el statement que le ponga en cada uno de los casos
```
switch(expr) {
  case expr1:
    stmtA;
    break;

  case expr2:
    stmtB;
    break;

// ...

  default:
    stmtC;
// opcional
    break;
}
```

##Break##
Me hace salir del ciclo automáticamente

```
var i;
for (i=0 ; i<10; i++) {
    if (i*2 === 10){
        break;
    }
    console.log(i);
}
```

##Continue##
Pasa al siguiente ciclo salteando las lineas que faltan del ciclo donde esta

Ej.:
```
var i = 0;
while (i<10) {
    if (i*2 === 10){
        continue;
    }
    console.log(i);
    i++;
}
```
En este caso daría un loop infinito, porque el continue hace que el loop se salte la linea donde se incrementa la variable

-----------------------------------------------------------------

#Funciones de Strings#

##Length()##
Me devuelve la cantidad de caracteres en un string

##string[i]##
Me devuelve el caracter en la posicion "i" del string

Ejercicios en clase:
Hacer un programa que medante un prompt obtenga una cadena de texto, y luego imprima por consola la posicion de la primera vocal

```
var palabra = prompt ("Decime una palabra y te digo la posicion de la primer vocal");
var letra;
var posLetra =0;
while (posLetra < palabra.length){
    letra = palabra[posLetra];
    if (
        letra === "a"
        || letra === "e"
        || letra === "i"
        || letra === "o"
        || letra === "u"
        ){
            console.log("La palabra tiene la priemr vocal en la posición "+(posLetra+1));
            break;
        }
    posLetra++;
}
```

Ejercicio en clase 2:
Hacer un protgrama que mediante un prompt obtenga una cade de texto, y luego imprima por consola la cantidad de vocales qeu esta cadena de texto contiene

```
var palabra = prompt ("Decime una palabra y te digo la posicion de la primer vocal");
var letra;
var posLetra =0;
var contador = 0;
while (posLetra < palabra.length){
    letra = palabra[posLetra];
    if (
        letra === "a"
        || letra === "e"
        || letra === "i"
        || letra === "o"
        || letra === "u"
        ){
            contador++;
        }
    posLetra++;
}
console.log("La palabra tiene "+contador+" vocales");
```

Ejercicio en clase 3:
Dada una cadena de caracteres hacer un programa que encuentre todos los caracteres numericos mayores a un numero ingresado mediante un prompt

```
var palabra = prompt ("Ingresa la cadena de caracteres a analizar");
var limite = prompt("Encontraremos todos los caracteres numericos de la cadena que sean mayores a...");
var contador = 0;
var numeros = 0;
var posString =0;
while (posString < palabra.length){
    letra = palabra[posString];
    if(Number(letra)){
        numeros++;
        if (Number(letra)>limite){
            contador++;
        }
    }
    posString++;
}
if(contador === 1){
    console.log("En la cadena " + palabra + " hay " + numeros + " caracteres numericos, pero solo " + contador + " es mayor a "+limite);
} else {
    console.log("En la cadena " + palabra + " hay " + numeros + " caracteres numericos, pero solo " +contador+ " son mayores a "+limite);
}
```

##String.IndexOf()##
Devuelve la ubicacion en un string de lo que uno le ingrese a IndexOf(). Devuelve la ubicacion de la primer coincidencia

##String.LastIndexOf()##
Devuelve la ubicacion del caracter que le ingrese a la funcion. Devuelve la ubicacion de la ultima coincidencia

##String.substring(n,f)##
Esto lo que hace es devolverme una parte del string que comienza y termina en n y f ingresados. Si pongo solamente n me devuelve desde n hasta el final, y si no pongo nada me devuelve todo el string
Si el valor f es menor que n lo que hace es darlos vuelta.

Ej.1:
```
var string = "Hola mundo"
string.substring(2,-1)
"ho"
```
Ej.2:
```
var string = "Hola mundo"
string.substring(2,10)
"la mundo"
```

##String.substr(n,f)##
Me devuelve una parte de un string empezando por n y siendo f caracteres despues de n
Si n fuese negativo, empiezo desde el final, y luego defino cuantos caracteres luego del inicio quiero. Es como ivnertir la primer parte de la logica

```
var string = "Hola mundo"
string.substr(-2)
"do"
```
```
var string = "Hola mundo"
string.substr(-4,3)
"und"
```

##str.toUpperCase()##
Convierte el string que se le inserta en mayusculas
##str.toLowerCase()##
Convierte el string que se le inserta en minusculas

Ejercicio en clase:
Mediante 2 prompt recibir dos cadenas de texto, e imprimir la posicion en la cual ocurre la 2 en la primera, o imprimir "no se encontro currencia" en caso contrario

```
var palabra1 = prompt("Ingrese la primer frase");
var aEncontrar = prompt("Ingrese lo que quiere encontrar en la frase anterior");

if(palabra1.indexOf(aEncontrar) === -1){
    console.log("no se encontro ocurrencia");
}
else {
    console.log("La segunda frase aparece en la primera en el caracter "+palabra1.indexOf(aEncontrar));
}
```

Recibir mediante un prompt dos variables, primera o ultima. Si se ingresa "primera" se utiliza IndexOf y si se ingresa ultima se utiliza LastIndexOf. Y si no es ninguna disparar un alert que diga que la palabra ingresada no corresponde a las palabras validas

```
var palabra1 = prompt("Ingrese la primer frase");
var aEncontrar = prompt("Ingrese lo que quiere encontrar en la frase anterior");
var orden = prompt("Ingrese Primera si quiere encontrar la primer coincidencia o Ultima si quiere la ultima");

if (orden === "Primera"){
    if(palabra1.indexOf(aEncontrar) === -1){
    console.log("no se encontro ocurrencia");
    }
    else {
    console.log("La segunda frase aparece en la primera en el caracter "+palabra1.indexOf(aEncontrar));
    }
} else if (orden === "Ultima"){
    if(palabra1.lastIndexOf(aEncontrar) === -1){
    console.log("no se encontro ocurrencia");
    }
    else {
    console.log("La segunda frase aparece en la primera en el caracter "+palabra1.lastIndexOf(aEncontrar));
    }
}
else{
    alert("El orden ingresado no es valido. Las unicas variables validas son Primera y Ultima");
}
```

--------------------------------------
#Tipo de dato compuesto#

##Lista##
Es una lista que puede tener distintos tipos de elementos adentro. Dentro de una lista puedo tener varios elementos simultaneamente o restringirlo a un solo tipo de elemento

Hay una funcion constructora que se llama Array(). Si le ingreso dos strings genera un array con dos strings, pero si le ingreso un numero genera un array vacio con dos ubicaciones

Tambien se puede utilizar la funcion length como con strings, y accedo a los elmentos del array de la misma forma que a un caracter de un string

El maximo de elmentos que puede tener un array es 2 a la 32 (2^32)

Si yo creo un array de 5 posiciones vacias luego puedo agregarle mas sin problema

si quiero generar un array vacio lo defino asi:
```
var arr = [];
```

si quiero generar un array con elementos lo defino asi:
```
var arr = ["test", "pepepe"];
```

si quiero generar un array con el numero 2 adentro:
```
var arr = [2];
arr
[2]
```

Para acceder al primer elemento hago:
```
var arr = ["test", "pepepe"];
arr = [1];
"test"
```

Otros ejemplos:
```
> var arr = new Array("elem1", "elem2");
undefined
> var arr = Array("elem1", "elem2");
undefined
> var arr = [ "elem1", "elem2" ]
undefined
> arr.length
2
> arr[0]
'elem1'
> arr[1]
'elem2'
```

Un array se puede modificar, no es inmutable como un string
```
arr[1]
'elem2'
arr[1]="elem2-modified"
'elem2-modified'
arr
['elem1','elem2-modified','elem3']
```

Puedo acceder rapidamente a la siguiente posicion. De la siguiente forma rapidamente agrego un elemento al array. Ya que el length esta medido con 1 en la primer posicion, por lo que si lo uso posicionalmente es como agregar un elemento
```
arr.length
5
arr[arr.length] = "elem6"
arr
[elem1,elem2,elem3,elem4,elem5,elem6] 
```

Que pasa si agregamos un elemento en una posicion no continua de la ultima actual? Se puede, se completan las posiciones itnermedias con elementos vacios hasta la posicion indicada
```
arr[22] = "elem23"
arr.length
23
```

##Array.pop()##
El método pop() elimina el último elmenento de un array y lo devuelve

##Array.shift()##
El metodo shift() elimina el primer elemento de un array y lo devuelve

##Array.unshift()##
Reingresa al array el elemento eliminado

##IndexOf y LastIndexOf funcionan igual que en los strings##
Ahora pueden recibir cualquier tipo de elemento

##Array.push()##
Inserta en el array los valores que le ingreso al final del array

##Puedo buscar dentro de un array utilizando el operador "in"##
Me devuelve un boolean si encuentra algo o no en la posicion que le idnico

Ej.:
```
var arr = Array(9);
1 in arr
false
arr[1]=undefined
1 in arr
true
```

Ejercicio en clase: Mediante un prompt y un while ingresar elementos a un array hasta que uno de ellos sea el string "basta", luego imprimir en consola el array resultante

```
var arr = [];
do {
    var ingreso = prompt("Ingresa lo que quieras que tenga tu array o basta si hasta aqui esta bien");
    arr.push(ingreso);
}
while (ingreso !== "basta")
console.log(arr);
```
