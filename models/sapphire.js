var mongoose = require('mongoose');

var SapphireSchema = mongoose.Schema({
    companyName: String,
    mainTitle: String,
    tabTitle: String,
    motto: String,
    story: [String]
    
});

module.exports = mongoose.model("Sapphire", SapphireSchema)