var mongoose = require('mongoose');

var TypesSchema = mongoose.Schema({
    type: String
});

module.exports = mongoose.model('Types', TypesSchema);