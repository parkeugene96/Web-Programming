const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const _ = require('lodash');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Getting all User information
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

//New User is created
router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    let user = await User.findOne({ email: req.body.email});
    if (user) return res.status(400). send('User already registered');

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password']));

    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'firstname', 'lastname', 'email']));
});

module.exports = router;
