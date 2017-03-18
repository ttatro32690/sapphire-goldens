var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    rawImageData: String,
});

module.exports = mongoose.model('Images', ImageSchema);