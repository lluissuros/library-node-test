var express = require('express');

var app = express();
var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/books', (req, res) => {
  res.send('hello books');
});

app.listen(port, (err) => {
  console.log('listening on port ' + port);
});
