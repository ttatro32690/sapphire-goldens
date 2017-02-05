var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    type: String,
    description: String,
    birthdate: Date,
    k9data: String,
    pedigree: String,
    clearances: String,
    imageFiles: [String],
    dateCreated: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);