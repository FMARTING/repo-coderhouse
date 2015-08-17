EXPRESS
-------------------------------------------------
Primero instalamos express con 'npm install express -g' desde la consola de node.js

Luego instalamos los ejemplos

Nuestro middlewares los vamos a aplicar usando app.use(---)

Los middleware se paran arriba de los modulos http de node y genera funciones que luego utilizamos para simplificar la programaion del servidor

Para usar un middleware solamente cuando se recibe el pedido de una ruta en particular se pone como primer parametro la ruta que se quiere:
```
app.use('/', routes); 
```

Ejemplo en clase:
```
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
    })
```

Para cada middleware tengo que reconocer y manejar el error de ese middleware, no puedo generar una funcion global para todos los middleware

##MongoDB##

Una vez instalado vamos a la carpeta en )C:\Program Files\MongoDB\Server\3.0\bin)
Abro una linea de comandos y muevo mongod.exe a la ventana de la linea de comando y lo ejecuto. Me va a tirar un error. Esto quiere decir que esta instalado pero no esta corriendo. En la respuesta del error indica donde busca la carpeta data/db
Generamos una carpeta que sea C:/DATA/db (a mi me pidio que lo cree en d)
y volvemos a correr lo mismo que antes

Luego para ejecutar la ventana de comandos abro un nuevo cmd.exe y tiro mongo.exe y ejecuto

Por cada base de datos voy a tener colecciones, por cada coleccion voy a tener documentos.
Las bases de datos generalmente se usan para colocar documentos en colecciones que no quiero que se linkeen con otras colecciones. Si quiero conectar coleccinoes con colecciones no deberia utilizar bases de datos no relacionales. No da soporte nativo para conexiones entre colecciones.

Dentro de cada coleccion voy a querer hacer CRUD (Create, Read, Update, Delete) con los documentos

###para crear un documento uso insert:###
db.(coleccion).insert({key_objeto: valor, key_objeto:valor})
*a cada documento ingresado siempre le genera una key*

###para actualizar un documento:###
db.(coleccion).update({key_objeto:valor_actual}, {nuevo_key:valor_nuevo})
*acá mantiene el key pero le pisa sus valores*
el update por defecto busca un unico elemento, para que busque todos tengo que ponerle multi = true:
db.(coleccion).update({(objeto a cambiar: valor)}, {nuevo_key:nuevp_valor}, {multi:true})
*de esta forma todos los documentos que matcheen la descripcion se van a actualizar*

###para borrar:###
db.(coleccion).remove({criterio de filtro})

###para leer usamos .find()###
db.(coleccion).find({object_key:value})

Existen otras opciones diferentes a mongodb que tambien se pueden usar:
-CouchDB
-LevelDB
-Cassandra
-Hadoop
-Etc
-Risk