const Friends   = require('../../models/Friends');
const jwtDecode = require('jwt-decode');
const User      = require('../../models/User');

const AddFriends = async (req, res) => {
    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }
    const token      = req.headers.authorization.split(" ")[1];
    const decoded    = jwtDecode(token);
    const userEmail  = await User.findOne({email: decoded.email});
    const fromUserId = userEmail._id;
    const toUserId   = req.body._id;
    const fromName = userEmail.name;

    const friend  = new Friends;
    friend.from   = fromUserId;
    friend.to     = toUserId;
    // friend.status = 0;
    friend.save()
        .then((result) => {
            res.send({toUserId :toUserId, fromUserId: fromUserId, fromName: fromName, status :result.status});
            console.log(result);
        })
        .catch((error) => {
            console.log(error)
        });
};

module.exports = AddFriends;