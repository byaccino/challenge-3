// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var length = prompt("Choose a passwordlength between 8 and 128 characters:");
  if (length < 8 || length > 128){
    alert("Invalid length. Please choose between 8 and 128 characters")
    return;
  }
 
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "012346789";
  var specialChars = "!@#$%^&*()_-+=<>?";
  var validChars = '';
  var lc = confirm("Include lowercase characters?")
  console.log(lc)

  if (lc) {
    validChars += lowercase;
  
  }
  if (confirm("Include uppercase characters?")){
    validChars += uppercase;
  }
  if (confirm("Include numbers?")) {
    validChars += numbers;
  }
  if (confirm("Include special characters?")) {
    validChars +=specialChars;
  }
console.log(validChars)
  if (!validChars) {
    alert("At least one character type should be selected.");
    return;
  }
  var password = "";
  for (let i = 0; i < length; i++) {
    password += validChars[Math.floor(Math.random() * validChars.length)];
  console.log(password)
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordText.addEventListener("click", writePassword);


