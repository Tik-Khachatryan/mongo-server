const Posts = require('../../models/Posts');

const DeletePost = (req, res) => {
    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }

    const postId = req.params.id;

    Posts.deleteOne({ _id: postId }).then(res.send({id:postId}));

};

module.exports = DeletePost;