var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test',function(err, db){
	// if(err){
	// 	throw new Error('capo, levantá la base');
	// }
	// //console.log(err,db);
	// //CRUD
	// db.collection('otracoleccion').insert({texto: 'desde node'}, function(err){
	// 	if(err) {
	// 		console.log(err)
	// 		return;
	// 	}
	// 	console.log('insertó correctamente');
	// 	db.close();
	// });
	// este primer comando busca lo que le indico
	// var cursor = db.collection('otracoleccion').find({texto:'desde node'});
	// //luego tengo que leer la referencia que traje
	// cursor.on('data', function(data){
	// 	console.log(data);
	// });
	// cursor.on('end', function(){
	// 	db.close();
	// });

	// cursor.on('errpr', finction(err){
	// 	console.log(err);
	// 	//y manejate
	// })
	
	//todo de una
	db.collection('otracoleccion').find({texto:'desde node'}).toArray(function(err,res){
		console.log(err,res);
	});

});