var genBtn = document.getElementById("genBtn").addEventListener("click", genInit);
var passwordLength = "";


function genInit(event){
    event.preventDefault();
   

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', "@", '#', '$', '%', '^', '&', '*', '+'];
var finalPassword = [];


    var charLength = prompt("how many characters for you password?")
        finalPassword = lowerChar.concat(finalPassword);
    if(charLength <= 15){
        console.log("correct length")

        passwordLength = passwordLength.concat(charLength);
        console.log(passwordLength);
    } else {
        window.alert("please select a range from 1-15")
    } 
    
    if (charLength <= 15){
        var upperQuestion = window.confirm("Would you like upper case letters included?")
    } 
    
    if (upperQuestion){
         finalPassword = upperChar.concat(finalPassword);

         var numberQuestion = window.confirm("would you like to include numbers?")
    } else if (upperQuestion == false){
        numberQuestion = window.confirm("would you like to include numbers?")
    }

    if (numberQuestion){
        finalPassword = numberChar.concat(finalPassword);

        var specialQuestion = window.confirm("Would you like to add special characters?")
    } else if (numberQuestion == false){
        specialQuestion = window.confirm("Would you like to add special characters?")
    }

    if (specialQuestion){
        finalPassword = specialChar.concat(finalPassword);

        //displayPassword();
    } else {
        //displayPassword();
    }

    console.log(finalPassword)
    console.log(typeof(charLength))
}

