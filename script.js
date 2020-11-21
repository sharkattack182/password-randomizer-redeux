// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowercase = confirm("Would you like to use lowercase letters?");
  var uppercase = confirm("would you like to use uppercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var specialChar = confirm("Would you like to use special characters?");
  var length = prompt("Please enter a password length between 8-120 characters.")

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
