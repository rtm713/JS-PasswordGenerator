// Assignment code here

var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!","@","#","$","%",]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passLen = prompt("How many characters? (8-128)");
  Number(passLen);
  var useLow = confirm("Do you want to include lowercase letters?")
  var useUpp = confirm("Do you want to include Uppercase letters?")
  var useSpec = confirm("Do you want to include special characters? (@,%,!)")
  var useNum = confirm("Do you want to include Numbers?")

  var passPool = []

  if (useLow === true) {passPool = passPool.concat(lowCase);}
  if (useUpp === true) {passPool = passPool.concat(uppCase);}
  if (useSpec === true) {passPool = passPool.concat(special);}
  if (useNum === true) {passPool = passPool.concat(numbers);}

  for (i=0; i<passLen; i++) {

  }; 

  /*
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
  }

*/
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
