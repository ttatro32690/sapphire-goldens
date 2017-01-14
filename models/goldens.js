var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    url: String,
    type: String,
    description: String,
    birthdate: Date,
    k9data: String,
    pedigree: String,
    clearances: String,
    imageFile: String,
    dateCreated: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);