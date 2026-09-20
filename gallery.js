let images = [
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
    "images/cat5.jpg",
    "images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/dog4.jpg",
    "images/dog5.jpg"
];

let altTexts = [
    "Cat available for adoption",
    "Cat available for adoption",
    "Cat available for adoption",
    "Cat available for adoption",
    "Cat available for adoption",
    "Dog available for adoption",
    "Dog available for adoption",
    "Dog available for adoption",
    "Dog available for adoption",
    "Dog available for adoption"
];

let openListTag = '<li class="photo">';
let closeListTag = '</li>';

let gallery = document.getElementById("gallery");

for(let i = 0; i < images.length; i++){
    
    let imageTag = '<img src="' + images[i] + 
        '" alt="' + altTexts[i] + '">';

    gallery.innerHTML += openListTag + imageTag + closeListTag;
}
