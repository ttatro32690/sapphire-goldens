var Sapphire = require('./models/sapphire');
var Goldens = require('./models/goldens');

var sapphireData = {
    mainTitle: "Welcome to Sapphire Goldens",
    motto: "A Proud Member of Yankee Golden Retriever Club & Golden Retriever Club of America",
    akc: "/public/images/akc.png",
    grca: "/public/images/grca.png",
    ygrc: "/public/images/ygrclogo.png",
    about: "/public/images/about.png",
    story: ["We are the Kauranen family from Southeastern MA. Other than the love that we share for one another, we share a common passion for our Golden Retrievers.",
        "Our 1st Golden put us under 'The Golden Spell'. Her name was Shadow and is 13 yrs. old in this picture with us. We spend much of our time and energy making sure the 8 Goldens that own us, are happy and healthy.",
        "Our first litter of puppies was born 20 yrs. ago and historically Sapphire Goldens produce 4 litters per year. Our girls are from champion pedigrees and although we have always used Champions from local Show Kennels, we are hoping that we will have our own champions someday. All have hip, heart and eye clearances.",
        "Our objective is to raise Golden Retrievers that are healthy, beautiful to the breed standard, and have that 'I want to be by your side' personality.",
        "Linda, Steven & Kerri"
    ]
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
    
    Goldens.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed");
            for(var i = 1; i < 39; i++){
                
                var newGolden = {
                    name: "sapphire" + i,
                    url: "/public/images/sapphire" + i + ".png"
                };
                
                Goldens.create(newGolden, function(err, createdGolden){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(createdGolden);
                    }
                });
            }
        }
    });
}

module.exports = seedDB;