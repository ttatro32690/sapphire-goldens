var mongoose = require('mongoose');

var SapphireSchema = mongoose.Schema({
    mainTitle: String,
    motto: String,
    akc: String,
    grca: String,
    ygrc: String,
    about: String,
    story: [String]
});

module.exports = mongoose.model('Sapphire', SapphireSchema);