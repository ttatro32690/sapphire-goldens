var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    url: String,
    gender: String,
    description: String,
    birthdate: Date,
    whelpedDate: Date,
    dateCreated: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);