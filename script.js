// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign prompts
var lengthPrompt = "How long do you want your password? (Must choose between 8 & 128 characters)"
var lowerPrompt = "Do you want lowercase?"
var upperPrompt = "Do you want uppercase?"
var numericPrompt = "Do you want numeric?"
var specialPrompt = "Do you want special characters?"
var isNumber = (8 < x > 128)

// Write password to the #password input
function writePassword() {
  prompt(lengthPrompt);
  if (isNumber === True) {
    prompt()
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
