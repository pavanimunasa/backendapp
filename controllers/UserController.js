const { response } = require('express');
const User = require('../models/Users');
const Contact = require('../models/Contact');

const insertUser = async (request, response) => {
    try {
        const input = request.body;
        const user = new User(input);
        await user.save();
        response.send('Registered Successfully !');
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const insertContact = async (request, response) => {
    try {
        const input = request.body;
        const contact = new Contact(input);
        await contact.save();
        response.send("Contact Us Saved Successfully!");
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const checkUserLogin = async (request, response) => {
    try {
        const input = request.body;
        console.log(input);
        const user = await User.findOne(input);
        response.json(user);
    } catch (e) {
        response.status(500).send(e.message);
    }
};

module.exports = { insertUser, checkUserLogin, insertContact };
