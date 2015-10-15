var express = require('express');
var router = express.Router();
var generate=require('./generate.js');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var app=require('../app.js');
app=express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(81);
var generate1 = new generate();

/* GET home page. */
router.get('/', function(req, res) {
			res.render('index',{}, function(err, html) {
				if(err) console.log(err);
  				res.send(html);
			});
});
io.on('connection', function (socket) {
  	socket.emit('news', { hello: 'world' });
	socket.on('give_exp', function (data) {
    	generate1.Expression(5,['+','-','*','/'],[5,7,9,1,6,4,3,8,2],function(expression){
			generate1.validateExpression(expression,function(validExpression,answer){
				console.log(validExpression.toString()+" Answer"+ answer)
				socket.emit('get_exp',{exp:validExpression,answer:answer});
  			});
		});
    });
});
module.exports = router;
//randomize expression and make UI sortable then add timeout