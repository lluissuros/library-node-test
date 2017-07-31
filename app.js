var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');
//set view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index', {title: 'hello', list: ['a', 'b']});
});

app.get('/books', (req, res) =>  {
    res.send('hello books');
});

app.listen(port, (err) => {
    console.log('listening on port ' + port);
});
