var Sapphire = require('./models/sapphire');
var Goldens = require('./models/goldens');

var sapphireData = {
    landingMotto: 'Quality Golden Retrievers from our home to yours.',
    landingBrand: '/public/images/sapphiremain.jpg',
    landingPhoto: '/public/images/sapphire_main1.jpg',
    aboutGreeting: 'Welcome to Sapphire Goldns!',
    aboutMessage: 'Founded in 1994 and proudly serving South Eastern Massachusetts',
    aboutBrand: '/public/images/sapphire_logo.png',
    aboutStoryTitle: 'Our Story',
    aboutStory: ["We are the Kauranen family from Southeastern MA. Other than the love that we share for one another, we share a common passion for our Golden Retrievers.",
    "Our 1st Golden put us under 'The Golden Spell'. Her name was Shadow and is 13 yrs. old in this picture. We spend much of our time and energy making sure the 8 Goldens that own us, are happy and healthy.",
    "Our first litter of puppies was born in 1994 and historically Sapphire Goldens produce 4 litters per year. Our girls are from champion pedigrees and although we have always used Champions from local Show Kennels, we are hoping that we will have our own champions someday. All have hip, elbow, heart and eye clearances.",
    "Our objective is to raise Golden Retrievers that are healthy, beautiful to the breed standard, and have that 'I want to be by your side' personality.",
    "Linda, Steven & Kerri"],
    aboutStoryPhoto: '/public/images/sapphire_main4.jpg',
    grca: '/public/images/grca.png',
    akc: '/public/images/akc.png',
    ygrc: '/public/images/ygrclogo.png'
};

function seedDB() {
    Sapphire.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            Sapphire.create(sapphireData, function(err, sapphire){
               if(err){
                   console.log(err);
               } else {
               }
            });
        }
    });
    
    // Goldens.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log("Removed");
    //         for(var i = 1; i < 39; i++){
                
    //             var newGolden = {
    //                 name: "sapphire" + i,
    //                 url: "/public/images/sapphire" + i + ".png"
    //             };
                
    //             Goldens.create(newGolden, function(err, createdGolden){
    //                 if(err){
    //                     console.log(err);
    //                 } else {
    //                     console.log(createdGolden);
    //                 }
    //             });
    //         }
    //     }
    // });
}

module.exports = seedDB;