/**
 * http://usejsdoc.org/
 */

function view(response){
	console.log('request handler called ---> view');
	
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello view');
	response.end();
}

function create(response){
	console.log('request handler called ---> create');
	
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello create');
	response.end();
}

var handle={};		//make pair(path : match function)
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;