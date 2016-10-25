var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    imageUrl: String
});

module.exports = mongoose.model('Image', ImageSchema);