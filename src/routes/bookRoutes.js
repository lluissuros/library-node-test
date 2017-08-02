const express = require('express');

var bookRouter = express.Router();

const router = (nav) => {
    const books = [
        {
        title:'Test1',
        author: 'test author1'
    },
        {
        title:'Test2',
        author: 'test author2'
    },
        {
        title:'Test3',
        author: 'test author3'
    },
        {
        title:'Test4',
        author: 'test author4'
    },
    ];

    bookRouter.route('/')
        .get((req, res) => {
            // res.send('hello books from router');
            res.render('bookListView', {
                title: 'Books',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};

module.exports = router;
