const User = require('../../models/User');


const Register = (req, res) => {

    if (!req.body) {
        console.log('bad req');
        return res.sendStatus(400);
    }

    const user    = new User();
    user.email    = req.body.email;
    user.name     = req.body.name;
    user.sureName = req.body.sureName;
    user.password = req.body.password;
    user.age      = req.body.age;
    user.gender   = req.body.gender;
    user.img      = req.file.filename;

    user.save()
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error)
        });


};

module.exports = Register;