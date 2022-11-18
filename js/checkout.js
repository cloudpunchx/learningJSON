// example of taking a JSON and getting something from it

let selectionJson = Cookies.get(`bookSelection`);
// parse means go thru the string and give us something we can use
let selection = JSON.parse(selectionJson);
// using *= multiply equals will save the result into selection:price (selection price x 0.8 essentially)
selection.price *= 0.8;
// we're just checking visually on the page that the price is correct after the calculation
// you wouldn't need to use the innertext piece, it's just to check, doing this literally makes the body display the text from selection.price
// document.body.innerText = selection.price;

document.body.insertAdjacentHTML(`afterbegin`, `<p>${selection.description}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<h2>${selection.title}</h2>`);
document.body.insertAdjacentHTML(`afterbegin`, `<img src="${selection.imageUrl}" alt="Fairy Tale by Stephen King">`);

// root element = what were injecting into
function populateStore(rootElement, data){
    rootElement.insertAdjacentHTML(`afterbegin`, `<p>${selection.description}</p>`);
    rootElement.insertAdjacentHTML(`afterbegin`, `<p>Price: ${selection.price}</p>`);
    rootElement.insertAdjacentHTML(`afterbegin`, `<h2>${selection.title}</h2>`);
    rootElement.insertAdjacentHTML(`afterbegin`, `<img src="${selection.imageUrl}" alt="Fairy Tale by Stephen King">`);
}