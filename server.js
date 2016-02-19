var express = require('express');
var  app = express();
var PORT = process.env.PORT || 3000;
// example data
var todos = [{
  id: 1,
  description: 'Go to Reading Terminal Market',
  completed: false
},  {
  id: 2,
  description: 'Have lunch with Mom',
  completed: false
},  {
  id: 3,
  description: 'Get Phillies tickets',
  completed: true
}];

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

// GET /todos
// GET /todos/:id
app.get('/todos', function (req, res) {
  res.json(todos);
});

app.listen(PORT, function () {
  console.log('Express listening on port ' + PORT + '!');
});
