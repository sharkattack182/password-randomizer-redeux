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

// checks to make sure the length is infact a number and then checks to make sure if fits within the parameters

  if (isNaN(length) === true) {
    alert("Please enter a number.")
} else if (length < 8 || length > 120) {
    alert("Please choose a number between 8 and 120")
}

if (lowercase === false && uppercase === false && numbers === false && specialChar === false) {
    alert("you must select atleast one type of character for your password")
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
