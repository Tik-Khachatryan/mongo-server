const User = require('../../models/User');

const Search = (req, res) => {

    if (!req.body) {
        console.log('bad request');
        return res.sendStatus(400);
    }

    User.find({}, (err, result) => {
        const data = result.filter(word => word.name === req.body.value.search);
        res.send(data)
    })
};

module.exports = Search;