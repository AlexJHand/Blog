// Requires
var router = require('express').Router();
var mongoose = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost:27017/blog');

// Schema
var PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        required: true
    },
    tag: {
        type: String
    },
    posted: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'post'
}); // end PostSchema

// Object used to interact with db
var PostModel = mongoose.model('PostModel', PostSchema);

// Delete
router.delete('/:id', function (req, res) {
    console.log('In delete');
    var postId = req.params.id;
    PostModel.remove({
        _id: postId
    }, function (error) {
        if (error) {
            console.log('Error:', error);
        } else {
            res.sendStatus(200);
        }
    });
})

// Get
router.get('/', function (req, res) {
    console.log('In get');
    PostModel.find().then(function (data) {
        res.send(data);
    })
}) // end get

router.get('/:id', function (req, res) {
    console.log('In get + params');
    var postId = req.params.id;
    // PostModel.find({_id: postId}).then(function (data) {
    //     res.send(data);
    // });
    PostModel.findById(postId, function (error, data) {
        if (error) {
            console.log('Error:', error);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
}) // end get

// Post
router.post('/', function (req, res) {
    console.log('In post');
    var postToAdd = {
        title: req.body.title,
        body: req.body.body
    }
    console.log(postToAdd);
    PostModel.create(postToAdd, function (error) {
        if (error) {
            console.log('Error:', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });

}); // end post


// Exports
module.exports = router;