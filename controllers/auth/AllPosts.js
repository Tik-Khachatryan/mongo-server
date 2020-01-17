const Posts = require('../../models/Posts');
const User = require('../../models/User');
const jwtDecode = require('jwt-decode');

const AllPosts = async (req, res) => {
    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }
    const token = req.body.token;
    const decoded = jwtDecode(token);
    const response = await User.findOne({email: decoded.email});
    const userId = response._id;

    Posts.find({ 'userId': userId }).then(posts => {
        res.send(posts)
    });
};
module.exports = AllPosts;
