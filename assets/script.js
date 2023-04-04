// Assignment code here

var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!","@","#","$","%",]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]


function generatePassword() {
  var passPool = [];
  var password ="";
  var charTypeCheck = 0;

  var passLen = prompt("How many characters? (8-128)");
  Number(passLen);

  while ((passLen < 8) || (passLen > 128)) {
    alert("Error: number must be between 8-128")
    var passLen = prompt("How many characters? (8-128)");
    Number(passLen);
  }

  var useLow = confirm("Do you want to include lowercase letters?")
  var useUpp = confirm("Do you want to include Uppercase letters?")
  var useSpec = confirm("Do you want to include special characters? (@,%,!)")
  var useNum = confirm("Do you want to include Numbers?")

  if (useLow === true) {
    passPool = passPool.concat(lowCase);
    password = password + lowCase[Math.floor(Math.random() * lowCase.length)];
    passLen = passLen - 1;
    charTypeCheck++;
  }
  if (useUpp === true) {
    passPool = passPool.concat(uppCase);
    password = password + uppCase[Math.floor(Math.random() * uppCase.length)];
    passLen = passLen - 1;
    charTypeCheck++;
  }
  if (useSpec === true) {
    passPool = passPool.concat(special);
    password = password + special[Math.floor(Math.random() * special.length)];
    passLen = passLen - 1;
    charTypeCheck++;
  }
  if (useNum === true) {
    passPool = passPool.concat(numbers);
    password = password + numbers[Math.floor(Math.random() * numbers.length)];
    passLen = passLen - 1;
    charTypeCheck++;
  }

  while (charTypeCheck===0) {
    alert("Error: You Must choose at least one character type for your password. (uppercase, lowercase, special characters, or numbers)")
    var useLow = confirm("Do you want to include lowercase letters?")
    var useUpp = confirm("Do you want to include Uppercase letters?")
    var useSpec = confirm("Do you want to include special characters? (@,%,!)")
    var useNum = confirm("Do you want to include Numbers?")

    if (useLow === true) {
      passPool = passPool.concat(lowCase);
      password = password + lowCase[Math.floor(Math.random() * lowCase.length)];
      passLen = passLen - 1;
      charTypeCheck++;
    }
    if (useUpp === true) {
      passPool = passPool.concat(uppCase);
      password = password + uppCase[Math.floor(Math.random() * uppCase.length)];
      passLen = passLen - 1;
      charTypeCheck++;
    }
    if (useSpec === true) {
      passPool = passPool.concat(special);
      password = password + special[Math.floor(Math.random() * special.length)];
      passLen = passLen - 1;
      charTypeCheck++;
    }
    if (useNum === true) {
      passPool = passPool.concat(numbers);
      password = password + numbers[Math.floor(Math.random() * numbers.length)];
      passLen = passLen - 1;
      charTypeCheck++;
    }
  }



  for (i=0; i<passLen; i++) {
    password = password + passPool[Math.floor(Math.random() * passPool.length)]
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
