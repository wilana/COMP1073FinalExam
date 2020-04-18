// JavaScript Document

// Access JSON from github
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

// Use Fetch API to load JSON file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (catsList) {
    // send data to showCats function
    showCats(catsList);
  });

// Create a div to add the cats to
let div = document.createElement('div');
// Get the main element
let main = document.querySelector('main');
// Find the button
let button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', function () {
  // The user wants to see cats
  if (button.innerHTML == 'Show me cats!') {
    // Add the div of cats
    main.appendChild(div);
    button.innerHTML = 'Hide those cats!';
    // The user doesn't want to see cats
  } else {
    // remove the div of cats
    main.removeChild(div);
    button.innerHTML = 'Show me cats!'
  }
});


// Function to add all cats from json
function showCats(jsonObj) {
  // Save reference to cats
  let cats = jsonObj.cats;

  // for every cat in the array
  for (let i = 0; i < cats.length; i++) {

    // build the elements
    let thisCat = document.createElement('div');
    let name = document.createElement('h2');
    let blurb = document.createElement('p');

    // Fill the elements
    name.innerHTML = cats[i].name;
    // build a description
    let descript = cats[i].name + ' is a ' + cats[i].age + ' year old '
      + cats[i].species + ' that loves';

    // get the array of favourite foods
    let favFoods = cats[i].favFoods;
    // loop through to add all foods to the description
    for (let a = 0; a < favFoods.length; a++) {
      // Add food
      descript = descript + ' ' + favFoods[a];

      if (a == (favFoods.length - 1)) {
        // end with a period if it's the last food
        descript = descript + '.';
      } else {
        // end with a comma if it's not the last food
        descript = descript + ',';
      }
    }

    // add description to the element
    blurb.innerHTML = descript;

    // append all elements into the cat's div
    thisCat.appendChild(name);
    thisCat.appendChild(blurb);
    // append the cat's div to the parent div
    div.appendChild(thisCat);
  }
}
