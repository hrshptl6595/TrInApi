'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    email: {
        type: String,
        required: 'Enter email ID'
    }
});

module.exports = mongoose.model('Users', UserSchema);