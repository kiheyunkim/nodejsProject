/**
 * http://usejsdoc.org/
 */

var http = require('http');
var url = require('url');

function Entry(route, handle){
	function onRequest(request, response){
		
		var pathname = url.parse(request.url).pathname;
		route(pathname, handle ,response);

	}	
	
	http.createServer(onRequest).listen(8888);
	console.log('Server Start');
}

exports.Entry = Entry;