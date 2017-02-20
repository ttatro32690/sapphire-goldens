var mongoose = require('mongoose');

var SapphireSchema = mongoose.Schema({
    landingMotto: String,
    landingBrand: String,
    landingPhoto: String,
    aboutGreeting: String,
    aboutMessage: String,
    aboutBrand: String,
    aboutStoryTitle: String,
    aboutStory: String,
    aboutStoryPhoto: String,
    akc: String,
    grca: String,
    ygrc: String
});

module.exports = mongoose.model('Sapphire', SapphireSchema);