var server = require('./js/Server');
var router = require('./js/route');
var requestHandler = require('./js/requestHandler');

server.Entry(router.route , requestHandler.handle);