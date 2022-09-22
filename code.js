var genBtn = document.getElementById("genBtn").addEventListener("click", genInit);
var passwordLength;
var finalPassword = "";
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', "@", '#', '$', '%', '^', '&', '*', '+'];
var options = [];

function genInit(event) {
    event.preventDefault();
    options = [];

    passwordLength = Number(prompt("How many characters between 1 and 15 would you like to include in your password?"))

    if (passwordLength > 15) {
        alert("Please select the correct number of characters within the limit");
        return
    }


    var lowerQuestion = confirm("Would you like to include lower case characters?");
    if (lowerQuestion) {
        options = options.concat(lowerChar);
        
    }

    var upperQuestion = confirm("Would you like to include upper case characters?");

    if (upperQuestion) {
        options = options.concat(upperChar);
        
    } 
    
    var specialQuestion = confirm("Would you like to include special characters?");

    if (specialQuestion) {
        options = options.concat(specialChar);
        
    } 
    
    var numberQuestion = confirm("Would you like to include numbers?");

    if (numberQuestion) {
        options = options.concat(numberChar);
        
    }
     randomizePassword();

     console.log("the password length is " + passwordLength);
     console.log(typeof options);
    console.log(options);
}






function randomizePassword() {
    var password = ""
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * options.length)
        password += options[randomNumber]
        console.log(password)
    }
    var input = document.getElementById("passwordInput");
    input.value = password;
    return password;
    
}

