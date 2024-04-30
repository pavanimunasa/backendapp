const mongoose = require('mongoose');

const clientContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    }
});

const ClientContact = mongoose.model('ClientContact', clientContactSchema);

module.exports = ClientContact;
