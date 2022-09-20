var genBtn = document.getElementById("genBtn").addEventListener("click", genInit);
var passwordLength = [];
var finalPassword = "";
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', "@", '#', '$', '%', '^', '&', '*', '+'];

function genInit(event){
    event.preventDefault();
  

    var lengthQuestion = prompt("How many characters between 1 and 15 would you like to include in your password?")

    if (lengthQuestion <= 15){
        var lowerQuestion = confirm("Would you like to include lower case characters?");

        passwordLength = lengthQuestion.concat(passwordLength);
    } else {
        alert("Please select the correct number of characters within the limit");
    }

    if (lowerQuestion){
        finalPassword = lowerChar.concat(finalPassword);

        var upperQuestion = confirm("Would you like to include upper case characters?");
        } else {
        var upperQuestion = confirm("Would you like to include upper case characters?");
        }
    
    if (upperQuestion){
        finalPassword = upperChar.concat(finalPassword);

        var specialQuestion = confirm("Would you like to include special characters?");
    } else {
        var specialQuestion = confirm("Would you like to include special characters?");
    }

    if (specialQuestion){
        finalPassword = specialChar.concat(finalPassword);

        var numberQuestion = confirm("Would you like to include numbers?");
    } else{
        var numberQuestion = confirm("Would you like to include numbers?");
    }

    if (numberQuestion){
        finalPassword = numberChar.concat(finalPassword);

        randomizePassword();
    } else{
        randomizePassword();
    }



    console.log ("the password length is " + passwordLength);
    console.log(typeof Number(passwordLength));
    console.log(finalPassword);
}

function randomizePassword(){
    var password = ""
    for (i = 0; i < Number(passwordLength); i++){

        var randomizedPassword = finalPassword[Math.floor(Math.random()* finalPassword.length)]
        password = randomizedPassword.concat(password);
    }
    return password;
    
}