const mongoose = require('mongoose');

let childSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    allergies: {
        type: [String],
        required: false
    }
});

module.exports = childSchema;