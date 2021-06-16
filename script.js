// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//Create arrays of types of characters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", ",", ".", "/", "?", "<", ">", ";"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Create variables for resulting generated password
var passwordArray = [];
var userArray = [];

//Create prompts for user input, and variables based on user input.
//Conditional statements in case user inputs a value outside of the parameters

  var passwordLength = parseInt (prompt("How many characters do you want your password to be? (Choose a number between 8 and 128.)"));
  
  if (isNaN(passwordLength)===true){
    alert("Password must be more than 8 characters");
    return;
}

if (passwordLength < 8){
    alert("Password must be more than 8 letters");
    return;
}
if (passwordLength > 128){
    alert("Password must be less than 128 letters")
    return;
}

  var hasSpecial = confirm(
    "Click OK if you would like your password to contain special characters.");
  var hasLowercase = confirm(
    "Click OK if you would like your password to contain lowercase letters.");
  var hasUppercase = confirm(
    "Click OK if you would like your password to contain uppercase letters.");
  var hasNumbers = confirm(
    "Click OK if you would like your password to contain numbers.");

    if (
      hasLowercase === false &&
      hasUppercase === false &&
      hasSpecial === false &&
      hasNumbers === false
  
  )
  
  {
      alert ("You must select at least one type of character")
  return;
  
  }
  

//Conditional statements to generate random characters based upon user input

if (hasSpecial) {
  passwordArray = passwordArray.concat(specialArray);
}

if (hasLowercase) {
  passwordArray = passwordArray.concat(lowercaseArray);
}

if (hasUppercase) {
  passwordArray = passwordArray.concat(uppercaseArray);
}

if (hasNumbers) {
passwordArray = passwordArray.concat(numberArray);
}

//For loop to select random characters for the password length specified by the user 
for (var i = 0; i < passwordLength; i++){
  
  userArray.push (passwordArray[Math.floor(Math.random() * passwordArray.length)]);
}

return userArray.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
