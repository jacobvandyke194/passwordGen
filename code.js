var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', "@", '#', '$', '%', '^', '&', '*', '+'];
var finalPassword = [];
var charNumber = [];
var genBtn = document.getElementById("genBtn").addEventListener("click", genInit);



function genInit(event){
    event.preventDefault();

    var charLength = window.prompt("how many characters for you password?")
        finalPassword = lowerChar.concat(finalPassword);
    if(charLength <= 15){
        charNumber = charLength.concat(charNumber);
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

        displayPassword();
    } else {
        displayPassword();
    }

    console.log(finalPassword)
}

function displayPassword(){
    //for (i=0; i < charNumber; i++){
     //   let password = document.querySelector("#passwordInuput");
     //   password.value = finalPassword;
    //    finalPassword[math.floor(math.randon()* finalPassword.length)]


      //  password = math.floor(math.random(finalPassword));

      console.log("it works bruh")
    }
//}