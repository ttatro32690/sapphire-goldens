var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Image', ImageSchema);