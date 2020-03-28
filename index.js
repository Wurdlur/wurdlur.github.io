var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./config.json');
var menu = require('./menu.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/projects', function(req, res) {
    res.render('projects');
});

app.get('/payproject/', function(req, res) {
  res.render('pindex');
});

app.get('/payproject/new', function(req, res){
  res.render('new');
});

app.get('/payproject/project', function(req, res){
    res.render('project');
});

app.get('/payproject/calendar', function(req, res){
    res.render('calendar');
});

app.get('/payproject/contact', function(req, res){
    res.render('contact');
});

app.get('/payproject/apply', function(req, res){
    res.render('apply');
});

app.get('/burgers/', function(req, res){
  res.render('bindex', {
      "config": config
  });
});

app.get('/burgers/:viewname', function(req, res){
  res.render(req.params.viewname, {
      "config": config,
      "menu" : menu
  });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});