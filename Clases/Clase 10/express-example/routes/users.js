// var createExpression = require('express');
// var router = express.Router();
var express = require('express');
var router = express.Router();
var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
    /* GET users listing. */
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    router.get('/:userId', function(req, res, next) {
        // if (users[req.params.userId] === undefined) {
        //     var err = new Error('Estas hasta las manos amigo, NO EXISTIS!!!');
        //     err.status = 404;
        //     next(err);
        // }
        db.collection('usuarios').find({
            username: req.params.userId
        }).toArray(function(err, arr) {
            res.render('user', {
                user: arr[0].name,
                email: arr[0].email
            })
        })

    });
})
// var users = {
//     user1: {
//         name: 'pepe',
//         email: 'pepe@gmail.com'
//     },
//     user2: {
//         name: 'pablo',
//         email: 'pablo@gmail.com'
//     }
// }

module.exports = router;