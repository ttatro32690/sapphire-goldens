var mongoose = require('mongoose');

var ApplicationSchema = mongoose.Schema({
    name: String,
    date: Date,
    address: String,
    poBox: String,
    city: String,
    state: String,
    zip: String,
    telephone: String,
    prevOwner: String,
    yardFenced: String,
    children: String,
    otherPets: String,
    prepared: String,
    daycare: String,
    gender: String,
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Application', ApplicationSchema);