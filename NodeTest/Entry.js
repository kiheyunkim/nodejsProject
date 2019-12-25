var server = require('./js/Server');
var router = require('./js/route');
var requestHandler = require('./js/requestHandler');

server.Entry(router.route , requestHandler.handle);

//https://www.zerocho.com/category/NodeJS/post/5789e8d91c9e1ff02bdedad3