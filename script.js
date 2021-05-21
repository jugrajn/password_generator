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
  var length=parseInt(prompt(lengthPrompt));
  
  // Validate if user inputes integer between 8 and 128 characters
  

  if(length<8 || length>128 || length ===[]) {    // Problem asks for correct number twice???
    alert("Must be a number between 8 and 128");
    writePassword()
  } else if (isNaN(length)) {
    alert("Password length must be typed numerically")
    writePassword();
  } else {
    // Continue with function
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
  
  function generatePassword()


  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
