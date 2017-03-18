var mongoose = require('mongoose');

var GoldenSchema = mongoose.Schema({
    name: String,
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Types'
    },
    description: String,
    birthdate: Date,
    k9data: String,
    pedigree: String,
    clearances: String,
    imageFiles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Images'
            }
        ],
    dateCreated: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Goldens', GoldenSchema);