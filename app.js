var express = require('express');
var app = express();
var socketio = require('socket.io');
var bodyparser = require('body-parser');
var mysql = require('mysql');

var mySql = mysql.createConnection({
	host: '192.168.10.201',
	port: '3306',
	user: 'popcount',
	password: 'popcount@7040',
	database: 'popcount'
});

app.use(express.static('route'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.listen(1004,function(){
	console.log('local:1004 (running)')
})

app.get('/',function(req,res){
	res.sendFile(__dirname + '/route/index.html')
})
app.post('/email_post',function(req,res){
	res.render('email.ejs',{'email':req.body.email});
})
app.post('/ajax_send_email',function(req,res){
	var responseData = {'resule':'ok', 'email':req.body.email};
	res.json(responseData);
})
