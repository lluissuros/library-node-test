var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
const nav = [
    {Link:'/Books',text:'Books'},
    {Link:'/Authors',text:'Authors'},
];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');
//set view engine to ejs
app.set('view engine', 'ejs');

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
