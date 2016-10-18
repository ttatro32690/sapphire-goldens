var mongoose = require('mongoose');

var SapphireSchema = mongoose.Schema({
    mainTitle: String,
    imgs: [String],
    motto: String,
    story: [String]
});

module.exports = mongoose.model('Sapphire', SapphireSchema);