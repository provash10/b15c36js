// Create Element Function of js

// document.createElement('h1');

let hElement = document.createElement('h1');
hElement.innerHTML = "Hello World from h1 tag!";


// document.body.append(hElement);
document.body.prepend(hElement);

let pTag = document.createElement('p');
pTag.innerHTML = "This is a p tag";

let testDiv = document.querySelector('#testDiv');
let bTag = document.querySelector('#bTag');

testDiv.insertBefore(pTag, bTag);


let spanTag = document.createElement('span');
spanTag.innerHTML = "This is a span tag";
testDiv.appendChild(spanTag);