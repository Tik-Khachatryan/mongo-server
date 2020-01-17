require('dotenv').config();

const User    = require('../../models/User');
const express = require('express');
const jwt     = require('jsonwebtoken');
const app     = express();

app.use(express.json());


const Login = async (req, res) => {

    if (!req.body.user) return res.sendStatus(400);

    const user    = new User();
    user.email    = req.body.user.email;
    user.password = req.body.user.password;

    const accessToken = jwt.sign({
        email: req.body.user.email,
    }, process.env.ACCESS_TOKEN_SECRET);

    const response = await User.findOne({
        email:    user.email,
        password: user.password
    });

    if (response) {
        res.send({data: response, accessToken: accessToken});
    } else {
        res.sendStatus(400)
    }


};

module.exports = Login;