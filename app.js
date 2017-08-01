var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');
//set view engine to ejs
app.set('view engine', 'ejs');

bookRouter.route('/')
    .get((req, res) => {
        res.send('hello books from router');
    });
bookRouter.route('/single')
    .get((req, res) => {
        res.send('hello books/single from router');
    });

app.use('/Books', bookRouter);

app.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index', {
        title: 'hello',
        nav: [
            {Link:'/Books',text:'Books'},
            {Link:'/Authors',text:'Authors'},
        ]
    });
});

// app.get('/books', (req, res) =>  {
//     res.send('hello books');
// });

app.listen(port, (err) => {
    console.log('listening on port ' + port);
});
