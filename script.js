// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// prompts to determine the users password criteria

  var lowercase = confirm("Would you like to use lowercase letters?");
  var uppercase = confirm("would you like to use uppercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var specialChar = confirm("Would you like to use special characters?");
  var length = prompt("Please enter a password length between 8-120 characters.")

// arrays...

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArr = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

// checks to make sure the length is infact a number and then checks to make sure if fits within the parameters

  if (isNaN(length) === true) {
    alert("Please enter a number.")
} else if (length < 8 || length > 120) {
    alert("Please choose a number between 8 and 120")
}


// checks to make sure atleast one character is selected

if (lowercase === false && uppercase === false && numbers === false && specialChar === false) {
    alert("you must select atleast one type of character for your password")
}

// leaving off point..
// to do:
// figure out all what options were confirmed and concat them into a new array 
// generate a random number between 0 and the length of the array -1
// associate that random number with an index in the array
// create a password variable and join the new array together as a string and return the string
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
