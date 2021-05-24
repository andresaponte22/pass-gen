// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetterChars = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var lowerLetterChars = ["qwertyuiopasdfghjklzxcvbnm"]
var numberChars = ["1234567890"]
var specialChars = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates random password based on parameters
function generatePassword() {
    var passwordChars = ("");

    var passwordLength = window.prompt("How many characters would you like your password to be (8 to 128)");
    if (isNaN(passwordLength)) {
        window.alert("ERROR-002: Invalid input. Please input a number between 8 and 128")
        return;
    } else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("ERROR-003: Invalid input. Please input a number between 8 and 128")
        return;
    };
    
    var lowercase = window.confirm("Would you like to use lowercase letters?")
    if (lowercase) {
        passwordChars += lowerLetterChars
    };

    var uppercase = window.confirm("Would you like to use uppercase letters?")
    if (uppercase) {
        passwordChars += upperLetterChars
    };

    var numbers = window.confirm("Would you like to use numbers?")
    if (numbers) {
        passwordChars += numberChars
    };

    var specials = window.confirm("Would you like to use special characters?")
    if (specials) {
        passwordChars += specialChars
    };

    if (!lowercase && !uppercase && !numbers && !specials) {
        window.alert("ERROR-001: You must choose at least 1 set of characters!")
        return;
    };

    var passwordGen = ("");
    for (i = 0; i < passwordLength; i++) {
        passwordGen += passwordChars[Math.floor(Math.random() * passwordChars.length)]
    };
    return passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
