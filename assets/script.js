// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterChars = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var numberChars = ["1234567890"]
var specialChars = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"]

var passLength = prompt("How many characters would you like your password to be?");
var uppercaseConfirm = confirm("Do you wish to include uppercase letters?");
var lowercaseConfirm = confirm("Do you wish to include lowercase letters?");
var numbersConfirm = confirm("Do you wish to include numbers?");
var symbolsConfirm = confirm("Do you wish to include symbols?");

if (passLength < 10 || passLength > 50) {
    alert("Password must be between 10-50 characters long")
};

while (!uppercase && !lowercase && !numbers && !symbols) {
    alert("Select one of the following!");
    uppercaseConfirm = confirm("Do you wish to include uppercase letters?");
    lowercaseConfirm = confirm("Do you wish to include lowercase letters?");
    numbersConfirm = confirm("Do you wish to include numbeers?");
    symbolsConfirm = confirm("Do you wish to include symbols?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
