// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function dupicate(string) {
  try {
    let tempArr = string.split('');
    console.log(tempArr);
    var temp_json = {};
    tempArr.forEach(function (letter, idx, arr) {
      //console.log(letter)
      if (!temp_json[letter]) {
        temp_json[letter] = 1;
      } else {
        let val = temp_json[letter];
        // we can call also ++ either +1
        temp_json[letter] = val + 1;
      }
    });
    console.log(temp_json);
    for (let [key, value] of temp_json) {
      console.log(key.toLowerCase() + ' '); // + value
    }
  } catch (err) {
    console.log(err.message);
  }
}
dupicate('Hello World! How are you');

function validatePalin(str) {
  // get the total length of the words
  const len = string.length;

  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    // validate the first and last characters are same
    if (string[i] !== string[len - 1 - i]) {
      console.log([string[i], string[len - 1 - i]]);
      console.log('It is not a palindrome');
    }
  }
  console.log('It is a palindrome');
}

// accept the string or number from the prompt
const string = 'A lot not new I saw as I Went on to LA'; //prompt('Enter a string or number: ');
const value = validatePalin(string);
console.log(value);
