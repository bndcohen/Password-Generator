// Assignment Code

var sym= "~!@#$%^&*()_:<>"
var getRandomLower=Math.floor(Math.random() * 26);
var getRandomUpper= Math.floor(Math.random() * 26);
var num= Math.floor(Math.random() * 10) +1;

var createNew = alert("Hello, click 'OK' to generate a new password.");
var operator1 = confirm("Include special characters?");
var operator2 = confirm("Include lowercase characters?");
var operator3 = confirm("Include uppercase characters?");
var operator4 = confirm("Include numbers?");





if(operator1 == true){
  characters = sym;
}
if(operator2 == true){
  characters = getRandomLower;
}
if(operator3 == true){
  characters = getRandomUpper;
}
if(operator4 == true){
  characters = num;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("userAnswer");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















for (var i = 0; i < 10; i++){


}
