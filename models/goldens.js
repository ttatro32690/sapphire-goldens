var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    description: String,
    birthdate: Date,
    whelpedDate: Date,
    gender: String
});

module.exports = mongoose.model('Goldens', GoldenSchema);