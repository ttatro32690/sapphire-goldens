var Sapphire = require('./models/sapphire');
var Image = require('./models/image');
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

var imageData = [
         '/public/images/sapphire01.png',
         '/public/images/sapphire02.png',
         '/public/images/sapphire03.png',
         '/public/images/sapphire04.png',
         '/public/images/sapphire05.png',
         '/public/images/sapphire06.png',
         '/public/images/sapphire07.png',
         '/public/images/sapphire08.png',
         '/public/images/sapphire09.png',
         '/public/images/sapphire10.png',
         '/public/images/sapphire11.png',
         '/public/images/sapphire12.png',
         '/public/images/sapphire13.png',
         '/public/images/sapphire14.png',
         '/public/images/sapphire15.png',
         '/public/images/sapphire17.png',
         '/public/images/sapphire18.png',
         '/public/images/sapphire19.png',
         '/public/images/sapphire20.png',
         '/public/images/sapphire21.png',
         '/public/images/sapphire22.png',
         '/public/images/sapphire23.png',
         '/public/images/sapphire24.png',
         '/public/images/sapphire25.png',
         '/public/images/sapphire26.png',
         '/public/images/sapphire27.png',
         '/public/images/sapphire28.png',
         '/public/images/sapphire29.png',
         '/public/images/sapphire30.png',
         '/public/images/sapphire31.png',
         '/public/images/sapphire32.png',
         '/public/images/sapphire33.png',
         '/public/images/sapphire34.png',
         '/public/images/sapphire35.png',
         '/public/images/sapphire36.png',
         '/public/images/sapphire37.png',
         '/public/images/sapphire38.png',
         '/public/images/sapphire39.png'
      ];

function seedDB() {
    Sapphire.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            // console.log("Removed Sapphire Goldens Data");
            Sapphire.create(sapphireData, function(err, sapphire){
               if(err){
                   console.log(err);
               } else {
                //   console.log("Sapphire Data Initialized");
               }
            });
        }
    });
    
    Image.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            // console.log("Removed Image Gallery Links");
            imageData.forEach(function(image){
                var imageObject = {
                    imageUrl: image
                };
                Image.create(imageObject, function(err, createdImage){
                    if(err){
                        console.log(err);
                    } else {
                        // console.log("Image Created " + createdImage.imageUrl);
                    }
                });
            });
        }
    });
}

module.exports = seedDB;