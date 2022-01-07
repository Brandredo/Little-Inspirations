const mongoose = require('mongoose');
const addressSchema = require('./Address');

let ecSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    relationship: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Date,
        required: true
    },
    email: {
        type: [String],
        required: false
    },
    address: {
        type: addressSchema,
        required: true
    }   
});

module.exports = ecSchema;