var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var Menu = require('./models/Menu')

var app = express();

mongoose.connect('mongodb://localhost/caidan')

app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * POST /api/addmenuname
 */
app.post('/api/addmenuname',function(req,res){
	var name = req.body.name;
	var _menu;

	_menu = new Menu({
			name:name,
		})

		_menu.save(function(err,menu){
			if (err)
			{
				console.log(err)
			}

			Menu.fetch(function(err,menu){
				if (err)
				{
					console.log(err)
				}
				res.json({ menu:menu })
			})
		})
});

/**
 * GET /api/menu
 */
app.get('/api/menu',function(req,res){
	Menu.fetch(function(err,menu){
		if (err)
		{
			console.log(err)
		}
		res.json({ menu:menu })
	})
	
});

/**
 * DELETE /api/deletemenuname
 */
app.delete('/api/deletemenuname',function(req,res){
	var id = req.body.id;
	console.log(id)

	if (id)
	{
		Menu.remove({_id:id},function(err,menu){
			if (err)
			{
				console.log(err)
			}else{
				Menu.fetch(function(err,menu){
					if (err)
					{
						console.log(err)
					}
					res.json({ menu:menu })
				})
			}

		})
	}
})


app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    //接收并处理客户端发送的menuname事件
    socket.on('menunames', function(menunames) {
        //将消息输出到控制台
		io.emit('menunames', { menunames: menunames });
    })
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});