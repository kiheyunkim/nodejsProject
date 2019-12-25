/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

function ErrorHandle(){
	if(err){
		console.log(err);
	}
}

function toMain(response){
	fs.readFile(__dirname + '.\\..\\index.html', (err, data) => { // 파일 읽는 메소드
        if (err) {
          return console.error(err); // 에러 발생시 에러 기록하고 종료
        }
	response.end(data,'utf-8');
	});
}

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
handle['/'] = toMain;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;