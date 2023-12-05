async function whatsYourFavorite(){
    let fav = "Javascript";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;
}

whatsYourFavorite()
    .then(response => displaySubject(response)) // .then(displaySubject)
    .then(result => console.log(result)); // .then(console.log(result))