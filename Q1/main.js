// JavaScript Document


// only want one main
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
// Changed type to button to prevent reloading page
submitButton.type = 'button';

// Document was misspelled
let body = document.querySelector('body');
let input = document.querySelector('input[type="text"]');

// click is the proper listener, e is never used
submitButton.addEventListener('click', function () {
  //input wasn't declared
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  // paragraph was declared as para above
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
