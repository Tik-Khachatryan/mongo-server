const User    = require('../../models/User');
const jwtDecode = require('jwt-decode');


const Profile = async (req, res) => {
    let id = req.params.id;
    if(id === 'undefined'){
        const token = req.body.user;
        const decoded = jwtDecode(token);
        const response = await User.findOne({email: decoded.email});
        res.send(response);
    }else{
        User.findOne({_id : id }, (err, result) => {
            res.send(result)
        })
    }

};

module.exports = Profile;