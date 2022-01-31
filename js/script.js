
// Question 1
console.log ("Question: 1");

const cat = { complain : console.log("Meow!")}



// Question 2
console.log ("Question: 2");

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3
console.log ("Question: 3");

heading.style.fontSize = "2em";


// Question 4
console.log ("Question: 4");

heading.classList.add("subheading");


// Question 5
console.log ("Question: 5");

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = ("red");
}


// Question 6
console.log ("Question: 6");

const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7
console.log ("Question: 7");

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function myFunction (list) {
    for (i = 0; i < cats.length; i++) {
        console.log (cats[i].name);
    }
}

myFunction();



// Question 8
console.log ("Question: 8");

let catContainer = document.querySelector(".cat-container");

function createCats (cats) {
    for (let cat of cats) {

        if (typeof cat.age === "undefined") {
            cat.age = "Age unknown";
        }

        let eachCat = 
        `<div> 
        <h5>${cat.name}</h5>
        <p>${cat.age}</p>
        </div>`;

        catContainer.innerHTML += eachCat;
    }
}

createCats (cats);