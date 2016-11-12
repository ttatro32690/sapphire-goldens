var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    gender: String,
    description: String,
    birthdate: Date,
    whelpedDate: Date,
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);