var http = require('http');
var fn = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Hello World\n');

  	// me llega una solicitud a un path en particular

  	// si la url es / entones me fijo que onda index.html
  	// o index.php o index.aspx o etc...

  	// Si la url es /texto.txt entonces leo texto.txt y exixte
  	// 	entonces leo texto.txt y lo escirbo a la respuesta 
  	// 	seteo el content type
  	// 	y escribo 200 de status code
  	// 	termino la respuesta
  	// se no exixte ->404
  	// 	termino la respuesta

};

var server = http.createServer(fn);
server.listen(1337);
console.log('Server running at http://127.0.0.1:1337');