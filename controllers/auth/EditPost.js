const Posts    = require('../../models/Posts');
const EditPost = async (req, res) => {
    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }

    const id = req.params.id;

    Posts.update({_id: id}, {
        $set: {
            'title': req.body.title
        }
    })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
        })


};

module.exports = EditPost;