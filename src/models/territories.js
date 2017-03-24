'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    'name': {type: String, default: '', trim: true, required: true},
    versionKey: false
});

module.exports = mongoose.model('territories', ModelSchema);