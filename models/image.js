var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('Image', ImageSchema);