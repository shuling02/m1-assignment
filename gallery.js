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

let captionTexts = [
    "Buddy",
    "Luna",
    "Bella",
    "Max",
    "Milo",
    "Tim",
    "Frankie",
    "Mike",
    "Mills",
    "Zack"
];

let descTexts = [
    "A friendly cat looking for a loving family.",
    "A calm and affectionate cat looking for a new home.",
    "A lovely cat waiting for adoption.",
    "A loyal and energetic cat looking for a loving home.",
    "A curious and playful cat waiting for a new family.",
    "A happy pet ready to meet a new family.",
    "A friendly companion looking for a loving home.",
    "This pet is waiting for a caring family.",
    "This pet is ready to find a new home.",
    "A wonderful companion waiting to meet you."
];

let openListTag = '<li id="photo';
let closeListTag = '</li>';

let openCaptionTag = '<div class="caption">';
let closeCaptionTag = '</div>';

let openDescTag = '<div class="description">';
let closeDescTag = '</div>';

let gallery = document.getElementById("gallery");

for(let i = 0; i < images.length; i++){
    
    let imageTag = '<img src="' + images[i] + 
        '" alt="' + altTexts[i] + '">';

    let captionTag = openCaptionTag + 
        captionTexts[i] + 
        closeCaptionTag;

    let descTag = openDescTag + 
        descTexts[i] + 
        closeDescTag;

    gallery.innerHTML += 
        openListTag + (i + 1) + '">' +
        imageTag + 
        captionTag +
        descTag +
        closeListTag;
}
