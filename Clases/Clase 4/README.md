#Hoy vamos a ver Javascript#
------------------------------------------------------------
La primera parte es como meter Javascript en HTML:
- Se puede ingresar mediante codigo externo, como se hace con CSS
- O usar la etiqueta script (como la etiqueta style para CSS)

Nombrar los documentos como index.js es la forma default de nombrar los archivos en Node.js. Node.js va a buscar los archivos llamados index.js

Las etiquetas script son ejecutadas en le orden en el que fueron cargadas en el HTML, esten relacionadas a codigo ingresado en el HTML o sea que el codigo esta en otro archivo .js

Por lo general las etiquetas script se ponen dentro del body, abajo de todo. Esto lo que hace es dejar que se cargue el HTML y CSS y luego apliar el Javascript.
En cambio el CSS se suele poner arriba para que cargue primero el estilo y luego el HTML ya se cargue con estilo, y no solo y luego incorpore el estilo.

Si bien el ";" es opcional al terminar un statement en javascript es recomendable usarlo, porque sino Javascript va a usar su criterio. En general puede que no tenga consecuencias, pero en caso ambiguos puede que el criterio de Javascript no coincida con el criterio que uno quiso usar

Siempre que quiera usar una cadena de texto, una secuencia de caracteres, utilizo el tipo de dato string. Para poder explicitarle a Javascript que algo es un string encierro el string entre comillas (e.g. Hola mundo --> "Hola Mundo")
Boolean es un tipo de dato que tiene dos valores posibles, true o false.
Otro tipo de dato es number, a diferencia de otros lenguajes todos los numeros son number (es como que todos son interpretados como dobules)
Null es un tipo de dato el cual tiene un unico tipo de dato que tiene como unico valor null. Null representa la ausencia de un objeto
La ventaja de null y undefined es que en ambos casos tienen un solo valor posible.

Entonces los 5 datos primitivos de Java son:
- string
- number
- boolean
- null
- undefined

**Todo el resto de los tipos de dato, todo lo que complemente a estos 5 tipos de datos primitivos, son OBJECTS.**

**Cada tipo de dato posee una funcion que tiene su mismo nombre** (con la primer letra mayuscula) **que devuelve el valor que le ingrese con un dato del mismo tipo del nombre de la funcion**

El operador typeof te devuelve el tipo de dato que ingresaste. Ejemplo:
- typeof 'la palabra "hola" se usa para saludar'
- "string"

Una variable lo que nos permite es acceder a la posicion de la memoria a traves de un nombre. Las posiciones de memoria, variables, no hace falta definirlas al momento de generarlas en Javascript. (TIP: mantenerse siempre con el mismo tipo de variable. Y tambien que el nombre de la variable tenga sentido con lo que la variable es)
Como se decalara una variable?:
- var (nombre de la variable) = (valor)
Tambien puedo declarar mas de una variable simultaneamente. Ej.:
- var nombreUsuario, myVar
- var nombreUsuario = "pepe", myVar

Algunas restricciones que tiene la definicion de variables es que no puede empezar con numeros, si o si una letra, ni puede tener guiones
Hay una convencion para el nombre de las variables, se puede usar:
- siempre empiezan con minuscula
- si hay dos palabras las separo de una de dos formas:
    + chamelcase (ej.: var nombreUsuario, var posicionJugador, etc)
    + usar guion bajo para separar palabras "_" (ej.: var nombre_usuario)

Un bug de Javascript es que si uno hace "typeof null" te devuelve "object". Lo cual no es real, porque null es vacio, no es un objeto porque justamente no hay nada

Cada tipo de dato en si mismo es una expresion que devuelve lo que es. Por ejemplo la expression "Hola Mundo" es un string que devuelve un string. Un string devuelve su mismo resultado

Cuando usamos alert como es un statement que no tiene output, no devuelve nada, por eso la consola dice undefined.
Alert es un comando que es del browser, no de Javascript

Todas las variables se incializan por default como Undefined. Por ende no tiene sentido inicializar algo como undefined

Para comentar uso //

La coma (,) permite poner muchas expresiones seguidas y si lo ingreso me da el valor de la ultima expresion. Interpreta las dos pero solamente devuelve la ultima

Para indicar que es lo que quiero evaluar primero utilizo parentesis. Ej.:
- typeof myVar, 3 --> 3 

   **vs.**

- typeof (myVar,3) --> "number"

**Los strings son inmutables**, yo puedo redefinir una variable pero si una variable es un string y yo quiero modificar solo parte del string no voy a poder porque cada string es inmutable. Solamente podre cambiar el string de una variable redefiniendo la misma

Utilizando los corchetes yo accedo a una seccion del dato que tengo. Por ejemplo en un string accedo al caracter en la posicion del numero que esta dentro del corchete y **siempre se incia en 0**

Ej.:
- var myStr = "abc"
- myStr[1] --> "b"

##Boolean##

los siguientes valores dan False:
- ""
- 0
- undefined
- null
- NaN

**Todo el resto dan True**

-------------------------------------------------------------------------

##Operadores##

Siempre estan al menos compuesto por un operador y dos operandos. Y siempre se espera que los operandos tengan el mismo tipo. Aca entra lo que se llama type coercion, donde Javascript me obliga a tener un tipo de dato en particular. Los convierte en un tipo de dato en base a una jerarquia predefinida

###Suma + ###

La suma aplica solamente a numero o a strings. Si hay un string gana el string sobre el number y se tipifica todo a string.
El - y el + esperan que lo de la derecha sea un number, por lo que te da un numero si tenes un solo operando. Ej.:
- -"1" --> 1
- +"2" --> 2

**Las siguientes son solamente numericas**
###Resta - ###
###Multiplicacion * ###
###Division / ###
###Negado !###
Todo lo que esta a la derecha del operador negacion tiene que ser un boolean. Si no lo es lo castea a uno aplicandole la funcion Boolean().
Por lo que otra forma de aplicarle Boolean() a una variable/dato/expresion es utilizar la negacion dos veces. Ej.: !!1 --> false // !!0 --> true
###And &&###
No devuelve true o false, devuelve el valor de la expresion donde corto. Por ejemplo si el primero es false devuelve el primer valor, en cambio en otro caso devuelve el segundo o el enesimo en el que haya cortado

Ej.:
- 0 && 1 --> 0
- true && 0 --> 1
- (true && 1) && 2 --> 2
- (true && false) && 2 --> false

###Or ||###
Frena en el primer caso que encuentra el True. Si ambas son false devuelve la ultima

Ej.:
- 1 || 2 --> 1
- 0 || 2 --> 2
- 0 || false --> false

###mayor > // menor < // mayorigual <= // menorigual >==###
Devuelve un boolean si se cumple la funcion

### Igual no estricto ==###
Convierte los valores y verifica si son iguales
Ej.:
- true == 1 --> true

###Igual estricto ===###
Verifica que sean iguales no solamente los valores sino tambien los tipos
Ej.:
- true === 1 --> false
- true === true --> true

###Distinto estricto !=###
Distinto estricto. Verifica el tipo de dato

###Distinto no estricto !== ###
Distinto no estricto. No verifica el tipo de dato

###Resto %###
Devuelve el valor del resto de la division entre dos numeros. Por lo general se usa para ver si un valor es par o impar

### += numero // -= numero###
Aumenta la variable en la cantidad de numero. Ej.:
var i = 0;
- i += 2 --> i = 2
o
- i +=1 --> i = 1

Para sumar o restar uno puedo usar el signo dos veces. ej.:

- i++ --> 1
- ++i --> 1
- i-- --> -1
- --i --> -1
------------------------------------------------------------------------------

Todos los inputs que se ingresan son siempre tomados como string. Ej.:
- prompt (" cual es tu numero favorito) ---> input = 10
- Output = "10"

-----------------------------------------------------------------------------
##Condicional - IF##
Expresion general:
- if () {} [else {}]

If es un statement tambien, como var

Si la expresion que va entre parentesis da true se ejecuta el bloque de codigo dentro del primer par de llaves, en caso contrario se ejecuta la condicion que esta entre el segundo par de llaves, si es qeu esta definida (lo que esta entre corchetes [] es opcional)

**Los bloques ({}) no van con ;** porque sino genera un statement vacio luego de la llave de cierre y antes del ;

Las llaves permiten poner mas de un statement y agrupan ese grupo de lineas. Donde haya un statement puedo reemplazarlo por una estructura entre llaves. Donde espero un statement puedo pasar una expresion, **pero no al reves** (porque statement es un tipo particular de expresion)

Si en la condicion del if no uso typeof, cuando quiero analizar el boolean de una variable, me cubro de que la variable no este declarada. Si analizo una variable no declarada me va a dar un error, en cambio con el typeof adelante me la define como undefined y por ende false, y si esta decalrada pero no tiene valor pasa lo mismo. Entonces me cubro de las variables no decalaradas y de las no definidas con una misma solucion

El if se puede llamar a un statement con un operador ternario.

Ejercicio en clase en consola Google Chrome:

1 Mi version de la solucion del ejercicio
```
var numero = Number(prompt("Ingrese un numero"));
var esPar = numero % 2 === 0;
if (esPar) {
    alert("El numero "+numero+" es par")}
else {
    alert("El numero "+numero+" es impar")}
```


2 En este caso use el operador ternario "?", en este caso acorde se cumpla o no la condicion parImparMensaje va a toamr uno u otro de los valores puestos luego de "?"
```
var numero = Number(prompt("Ingrese un numero"));
var parImparMensaje= numero % 2 === 0? "Par" : "Impar";
```


3 Asi pudimos reducir la cantidad de lineas de codigo y automatizar mas el ejercicio
```
var numero = Number(prompt("Ingrese un numero"));
var parImparMensaje= numero % 2 === 0? "Par" : "Impar";
alert("El numero "+numero+" es " + parImparMensaje);
```

------------------------------------------------------
##Console##

Utilizando el . acceso a las funcionalidades del objeto a la izquierda del punto(.)

Ej.:
- window.alert
    + Este es equivalente a poner alert solo porque todo lo que nosotros ponemos sin aclarar el contexto/objeto es equivalente a utilizar el objeto window
- console.log(string): esto lo que hace es imprimir el string en la consola

-----------------------------------------------------

##Bucles##

Hay 3 tipos de bucles

###While###

While (expr) stmt;
While (i < 10) {};

Mientras que expr (boolean) sea true ejecuta el stmt

Ej. en consola en clase:

1 
```
var i =0;
while (i < 10) {
    console.log(i);
    i++;
}
```
2
```
var i =0;
while (i < 1000) {
    var parImparMensaje= i % 2 === 0? "Par" : "Impar";
    console.log("El numero "+i+" es "+parImparMensaje);
    i++;
}
```
3
```
var i = Number(prompt("Ingrese hasta que numero desea calcular"));
while (i >= 0) {
    var parImparMensaje= i % 2 === 0? "Par" : "Impar";
    console.log("El numero "+i+" es "+parImparMensaje);
    i--;
}
```