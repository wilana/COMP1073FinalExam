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
  if (button.innerHTML == 'Show me cats!') {
    main.appendChild(div);
    button.innerHTML = 'Hide those cats!';
  } else {
    main.removeChild(div);
    button.innerHTML = 'Show me cats!'
  }
});


function showCats(jsonObj) {
  let cats = jsonObj.cats;


  // use every index of the array
  for (let i = 0; i < cats.length; i++) {
    // build the elements
    let thisCat = document.createElement('div');
    let name = document.createElement('h2');
    let blurb = document.createElement('p');

    name.innerHTML = cats[i].name;
    let descript = cats[i].name + ' is a ' + cats[i].age + ' year old '
      + cats[i].species + ' that loves';
    let favFoods = cats[i].favFoods;
    console.log(favFoods.length);

    for (let a = 0; a < favFoods.length; a++) {
      descript = descript + ' ' + favFoods[a];
      if (a == (favFoods.length - 1)) {
        descript = descript + '.';
      } else {
        descript = descript + ',';
      }
    }

    blurb.innerHTML = descript;


    thisCat.appendChild(name);
    thisCat.appendChild(blurb);

    div.appendChild(thisCat);
  }
}
