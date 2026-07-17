const recov = new Object()

recov["bp"] = {
        id: "bp",
        title: "The Black Pearl",
        image: "./styles/images/black_pearl_in_bottle.png", // ship in a bottle
        alt: "totally real recovered pirate ship",
        label: "The Black Pearl in a bottle",
        desc: "The Black Pearl was actually discovered during recovery of Flight 19 by one of our divers, John Robbins.  While visiting a gift shop on South Eleuthera Island, Robbins purchased a ship in a bottle.  His children later got ahold of it, broke the bottle and tried to sail the miniature ship in their pool, whereupon it abruptly expanded to its more well known size, revealing itself to indeed be the famous Black Pearl.",
    }

recov["bop"]={
        id: "bop",
        title: "Klingon Bird of Prey",
        image: "./styles/images/bop.png", // ship in water
        alt: "definitely an alien space ship during recovery",
        label: "Bird of Prey during recovery",
        desc: "This vessel of extrasolar origin was discovered with sonar off the coast of California.  After picking up an unusually strong and large echo, divers were deployed to identify the source, which was found to be this large, alien spacecraft.  Recovery was extremely difficult due to its immense size, and ended up being the largest and most expensive recovery to date.  After being floated to the surface, a whaling harpoon was discovered in the nose of the spacecraft, which is surmised to be the cause, however unlikely, of the Bird of Prey's demise.",
    }

    // no, i'm not a giant leo fan, I just thought of a bit and built on it

recov["leo3"]={
        id: "leo3",
        title: "Leonardo DiCaprio",
        image: "./styles/images/leo1.jpg", // leo in titanic
        alt: "Leonardo Dicaprio on the ocean",
        label: "Leonardo DiCaprio during recovery",
        desc: "Leonardo DiCaprio was discovered during a survey of the Titanic wreck site in search of the Titan submersible.  It appears the combination of cold water and salt somehow kept him alive since the original sinking of the Titanic itself.  He was pulled from the water and returned to shore with the survey crew.",
    }

recov["leo2"]={
        id: "leo2",
        title: "Leonardo DiCaprio",
        image: "./styles/images/leo2.png", // leo on beach in insception
        alt: "Leonardo DiCaprio on the ocean",
        label: "Leonardo DiCaprio as found near American ship crash site",
        desc: "Leonardo DiCaprio was discovered on the beach of an island near the research expedition for the American ship by the crew of one of the support vessels.  He seemed very confused about how he had gotten there and repeatedly attempted to jump over the side of the ship after being taken aboard, insisting he needed to wake up.  He was submitted upon returning to shore for therapeutic treatment.",
    }

recov["leo1"]={
        id: "leo1",
        title: "Leonardo DiCaprio",
        image: "./styles/images/bonus_leo.jpg",
        alt: "Leonardo DiCaprio at Tanagra",
        label: "Leonardo DiCaprio at Tanagra",
        desc: "&lt; This post is being displayed in error. &gt;",
    }
    
recov["chx"]={
        id: "chx",
        title: "Chicxulub Asteroid",
        image: "./styles/images/chicx.jpg",
        alt: "Chicxulub asteroid on display",
        label: "Chicxulub asteroid on display",
        desc: "The Chicxulub crater is the impact site of the asteroid that famously caused the extintion of the dinosaurs.  A lengthy operation was performed to search the center of the crater off the coast of Mexico in the Gulf of America, employing sonar as well as EM field detectors to locate the remnants of the meteorite itself.  After 7 months, it was located and excavated with the use of the subterrene Virgil.  Little remains of the originally 6-mile diameter asteroid, which made recovery possible. The Chicxulub meteorite is now on display in Mexico.",
    }

recov["red"]={
        id: "red",
        title: "The Red October",
        image: "./styles/images/greeneville.jpg", // greeneville
        alt: "red october in dry dock",
        label: "The Red October in dry dock",
        desc: "The Red October is the first of a line of late Cold War-era Russian nuclear submarines. It is presumed to have been captured by the US Navy after its senior crew defected.  The giant submarine was scuttled in the Atlantic ocean, but was located and recovered by the Greeneville Salvage team.",
    }

recov["vl"]={
        id: "vl",
        title: "Virgil",
        image: "./styles/images/virgil.png",
        alt: "totally a subterrene that went to the center of the earth",
        label: "The Virgil subterrene on the ocean floor",
        desc: "Virgil is a truly unique subterrene vehicle equipped with a next-generation drilling device. According to leaked documents, Virgil was deployed by the US government to prevent a catastrophic natural disaster. It was found on the ocean floor a hundred miles off the coast of Hawaii and has been used effectively in the subsequent recovery of other objects of interest buried in the ocean floor.",
    }

recov["br"]={
        id: "br",
        title: "USS Bonhomme Richard",
        image: "./styles/images/jpj_br.jpg",
        alt: "painting of the Bonhomme Richard at the Battle of Flamborough Head",
        label: "Bonhomme Richard at Flamborough Head - Thomas Mitchell, 1780",
        desc: "The Bonhomme Richard was a 42-gun frigate under the command of patriot legend John Paul Jones. It was sunk after the defeat and capture of the British HMS Serapis off the coast at Flamborough Head, England. Search for the Bonhomme Richard was extensive, but it was finally located and recovered in 1974.",
    }
    
recov["sil"]={
        id: "sil",
        title: '"Sea-lost Silmaril"',
        image: "./styles/images/silmaril.jpg",
        alt: "a radiant gemstone",
        label: "Gemstone in a dark room showing intrinsic radiance",
        desc: "This radiant gemstone was discovered in the reef waters off the coast of Portugal by one of our divers on vacation with his wife. It's origin is a mystery.  No records of such an extraordinary stone exists in any historical or academic documents. The only written work that describes a similar object is JRR Tolkien's Silmarillion, to which the name of Silmaril has been tentatively applied to this jewel, for the Silmaril lost in the sea in Tolkien's work.",
    }
    
recov["as"]={
        id: "as",
        title: "American Ship",
        image: "./styles/images/american-ship-e.jpg",
        alt: "image details redacted",
        label: "&lt; REDACTED &gt;",
        desc: "&lt; Project details redacted by authority of the US Navy &gt;",
    }

// {
//     id: "",
//     title: "",
//     image: "",
//     alt: "",
//     label: "",
//     desc: "",
// }


let dynamic = document.querySelector('#dynamic');
let selector = document.querySelector('#article-select');

selector.addEventListener('change', loadArticle);

function loadArticle() {

    // console.log(recov[selector.value].title)
    
    dynamic.innerHTML = "";
    
    let selectedID = selector.value;

    if (selectedID === "") {
        return
    }

    if (selectedID === "leo") {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        selectedID = selectedID + randomNum
    }
    
    console.log(selectedID)

    let html = get_html(selectedID);

    dynamic.innerHTML = html

}

function get_html(selectedID) {
    console.log(recov[selectedID].image)
    return `
    
    <div class="img-box">
    <h2>${recov[selectedID].title}</h2>
    <img src="${recov[selectedID].image}" alt="${recov[selectedID].alt}">

    <p class="img-label">${recov[selectedID].label}</p>
    </div>
    
    <p class="img-desc">${recov[selectedID].desc}</p>    
    `
}