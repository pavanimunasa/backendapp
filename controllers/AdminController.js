const { response, request } = require('express');
const User = require('../models/Users');
const Admin = require('../models/Admin');
const Contact = require('../models/Contact');

const viewUsers = async (request, response) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            response.send(" Data not found");
        } else {
            response.json(users);
        }
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const viewContacts = async (request, response) => {
    try {
        const contacts = await Contact.find();
        if (contacts.length === 0) {
            response.send(" Data not found");
        } else {
            response.json(contacts);
        }
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const deleteUser = async (request, response) => {
    try {
        const email = request.params.email;
        const user = await User.findOne({ "email": email });
        if (user) {
            await User.deleteOne({ "email": email });
            response.send("Deleted Successfully ");
        } else {
            response.send("Email Id Not Found");
        }
    } catch (e) {
        response.status(500).send(e.message);
    }
};

const checkAdminLogin = async (request, response) => {
    try {
        const input = request.body;
        console.log(input);
        const admin = await Admin.findOne(input);
        response.json(admin);
    } catch (e) {
        response.status(500).send(e.message);
    }
};

module.exports = { viewUsers, deleteUser, checkAdminLogin, viewContacts };
