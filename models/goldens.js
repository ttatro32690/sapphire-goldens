var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    description: String,
    birthdate: Date,
    whelpedDate: Date,
    male: Boolean,
    female: Boolean,
});

module.exports = mongoose.model('Goldens', GoldenSchema);