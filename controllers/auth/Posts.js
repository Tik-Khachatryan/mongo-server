const Posts = require('../../models/Posts');
const User = require('../../models/User');
const jwtDecode = require('jwt-decode');

const Post = async (req, res) => {
    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwtDecode(token);
    const userEmail = await User.findOne({email: decoded.email});
    const userId = userEmail._id;
    const post = new Posts();
    post.title  = req.body.post.title;
    post.userId  = userId;

    post.save()
        .then(result => {
            result._id;
            User.updateOne({ id: userId }, {$push: {posts: post}});
            res.send(post.title)
        })
};

module.exports = Post;