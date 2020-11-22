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

  var length = prompt("Please enter a password length between 8-120 characters.");

// declared a variable to concatinate all the arrays from users criteria
  var selectedArrays =[];

// declared a variable for the newly genterated password
  var newPassword = "";

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
} else {

// if an appropriate length is selected it prompts the user for password criteria

//lowercase
  if (confirm("Would you like to include lowercase letters in your password?")) {
    selectedArrays.push(lowercaseArr);
}

//uppercase   
  if (confirm("Would you like to include uppercase letters in your password?")) {
    selectedArrays.push(uppercaseArr);
}

// numbers 
  if (confirm("Would you like to include numbers in your password?")) {
    selectedArrays.push(numbersArr);
}

// special characters
  if (confirm("Would you like to include special characters in your password?")) {
    selectedArrays.push(specialCharArr);
}


console.log(selectedArrays);

for (var i = 0; i < length; i++) {
    var characterType = Math.floor(Math.random() * selectedArrays.length);
    var character = Math.floor(Math.random() * selectedArrays[characterType].length);
    var randomPick = selectedArrays[characterType][character];
    newPassword += randomPick;
  }
  return newPassword
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
