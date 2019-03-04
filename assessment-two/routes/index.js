var express = require('express');
var router = express.Router();
var todos = require("../data/todo-db");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List', todos });
});

router.post('/', function(req, res){
  console.log(todos.todos);
    todos.todos.push(req.body);
    console.log(todos.todos);
      res.redirect('/');
})

router.delete('/', function(req, res){
  console.log(todos.todos)
  todos.todos.splice(todos, 1);
  res.redirect('/')
})


module.exports = router;
