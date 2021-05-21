// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign prompts
var lengthPrompt = "How long do you want your password? (Must choose 8 & 128 characters)"
var chartypePrompt = "What character types do you want include in your password?"
var lowerPrompt = "Do you want lowercase?"
var upperPrompt = "Do you want uppercase?"
var numericPrompt = "Do you want numeric?"
var specialPrompt = "Do you want special characters?"

var character = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], 
  special: ["!", "@", "$", "%", "^", "&", "*", "(", ")", "_"],
};


// Write password to the #password input
function writePassword() {
  //First ask how long your password
  var length=parseInt(prompt(lengthPrompt));
  
  // Validate if user inputes integer between 8 and 128 characters
  

  if(length<8 || length>128 || length ===[]) {    // Problem asks for correct number twice???
    alert("Must be a number between 8 and 128");
    writePassword()
  } else if (isNaN(length)) {
    alert("Password length must be typed numerically")
    writePassword();
  } else {
    
  
  // Confirm if user wants lowercase alphabet
  var lowerQuestion = window.confirm(lowerPrompt);
  //Confirm if user wants uppercase alphabet
  var upperQuestion = window.confirm(upperPrompt);
  //Confirm if user wants numerbers in password
  var numericQuestion = window.confirm(numericPrompt);
  //Confirm if user wants special characters
  var specialQuestion = window.confirm(specialPrompt);
  }

  
  // What if no character types are chosen? Must select atleast 1 character type. 
  if (lowerQuestion === false && upperQuestion === false && numericQuestion === false && specialQuestion === false) {
      alert("Password generation impossible. Must include one character type");
      writePassword();
    } else {
    generatePassword()
  }
  


  //Make a condition if each prompt is true, randomly select a value from object character.keys and add to variable "password"

  // Run these conditions in a loop until "password" matches the "length" inputed by user.
  
  function generatePassword() {
    var newPassword = [];
    var question = writePassword();
    var finalPass = "";

    if (lowerQuestion === true ) {
      for (var x of character.lower) {
        newPassword.push(x); }
      }
    if (upperQuestion === true) {
      for (var x of character.upper) {
        newPassword.push(x); }
      }
    if (numericQuestion === true) {
      for (var x of character.number) {
        newPassword.push(x); }
      }
    if (specialQuestion === true) {
      for (var x of character.special) {
        newPassword.push(x); }
      }
    for ( var x = 0; x < question.length; x++) {
      finalPass +- newPassword[Math.floor(Math.random()* length)]
    }
    console.log(finalPass);
    return finalPass;
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
