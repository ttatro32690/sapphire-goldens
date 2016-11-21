var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    url: String,
    type: String,
    description: String,
    birthdate: Date,
    dateCreated: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);