// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign prompts
var lengthPrompt = "How long do you want your password? (Must choose 8 & 128 characters)"
var chartypePrompt = "What character types do you want include in your password?"
var lowerPrompt = "Do you want lowercase?"
var upperPrompt = "Do you want uppercase?"
var numericPrompt = "Do you want numeric?"
var specialPrompt = "Do you want special characters?"

var characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", //26 length
  lower: "abcdefghijklmnopqrstuvwxyz", // 26 length
  number: "0123456789", // 10 length
  special: "!@$%^&*()_", // 11 length
};


// Write password to the #password input
function writePassword() {
  //First ask how long your password
  prompt(lengthPrompt);
  // Validate if user inputes integer between 8 and 128 characters
  
  // Confirm if user wants lowercase alphabet
  window.confirm(lowerPrompt);
  //Confirm if user wants uppercase alphabet
  window.confirm(upperPrompt);
  //Confirm if user wants numerbers in password
  window.confirm(numericPrompt);
  //Confirm if user wants special characters
  window.confirm(specialPrompt);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
