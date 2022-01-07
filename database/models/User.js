const mongoose = require('mongoose');
const addressSchema = require('./Address');
const childSchema = require('./Child');
const ecSchema = require('./EmergencyContact');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    emergencycontact: {
        type: ecSchema,
        required: false
    },
    children: {
        type: [childSchema],
        required: false
    },
    address: {
        type: addressSchema,
        required: true
    },
    UID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);