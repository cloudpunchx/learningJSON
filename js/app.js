// this function is meant to indicate what button was clicked without assigning the buttons an id
// we are discovering who is the parent of the button so we then know which button was clicked
function choiceHandler(event){
    // event.target means the obj or element that rec'd the event, in this case its the button that was clicked
    let parent = event.target.parentElement;
    if(parent.id = `choice1`){
        let bookJson = JSON.stringify(selection1);
        Cookies.set(`bookSelection`, bookJson);
    } else if(parent.id == `choice2`){
        let book2Json = JSON.stringify(selection2);
        Cookies.set(`bookSelection`, book2Json);
    } else if(parent.id == `choice3`){
        let book3Json = JSON.stringify(selection3);
        Cookies.set(`bookSelection`, book3Json);
    }
}

let user = {
    username: `cloudpunch`,
    birthdate: `1996/07/09`,
    level: 20,
    isSubscribed: true,
    favoriteColors: [`pink`, `olive green`, `white`],
    pet: {
        name: `Bean`,
        age: 8,
    }
}

// stringify = serialization
// if he talks about serialization, use this stringify function
// turning data into a STRING is what we're doing really
let userJson = JSON.stringify(user);
Cookies.set(`user`, userJson);

// pretend the pics/values are different from each other
let selection1 = {
    title: `Fairy Tale by Stephen King`,
    price: 39.99,
    imageUrl: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg`,
    description: `Stephen King's newest novel.`
}

let selection2 = {
    title: `House of Leaves by Mark Danielewski`,
    price: 35.99,
    imageUrl: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg`,
    description: `Just TRY to get through this book.`
}

let selection3 = {
    title: `Book 3`,
    price: 21.99,
    imageUrl: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647789287l/60177373.jpg`,
    description: `Novel 3.`
}

// let selectionJson = JSON.stringify(selection1);
// Cookies.set(`selection`, selectionJson);

// the first step when injecting with javascript
let choice1 = document.getElementById(`choice1`);
choice1.insertAdjacentHTML(`afterbegin`, `<p>${selection1.description}</p>`);
choice1.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection1.price}</p>`);
choice1.insertAdjacentHTML(`afterbegin`, `<h2>${selection1.title}</h2>`);
choice1.insertAdjacentHTML(`afterbegin`, `<img src="${selection1.imageUrl}" alt="Fairy Tale by Stephen King">`);

let choice2 = document.getElementById(`choice2`);
choice2.insertAdjacentHTML(`afterbegin`, `<p>${selection2.description}</p>`);
choice2.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection2.price}</p>`);
choice2.insertAdjacentHTML(`afterbegin`, `<h2>${selection2.title}</h2>`);
choice2.insertAdjacentHTML(`afterbegin`, `<img src="${selection2.imageUrl}" alt="House of Leaves">`);

let choice3 = document.getElementById(`choice3`);
choice3.insertAdjacentHTML(`afterbegin`, `<p>${selection3.description}</p>`);
choice3.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection3.price}</p>`);
choice3.insertAdjacentHTML(`afterbegin`, `<h2>${selection3.title}</h2>`);
choice3.insertAdjacentHTML(`afterbegin`, `<img src="${selection3.imageUrl}" alt="Book 3">`);

let choices = []
choice1.querySelector(`button`).addEventListener(`click`, choiceHandler);
choice2.querySelector(`button`).addEventListener(`click`, choiceHandler);
choice3.querySelector(`button`).addEventListener(`click`, choiceHandler);