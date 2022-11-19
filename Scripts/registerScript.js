// get elements from the DOM
const fullName= document.getElementById('FullName');
const phone = document.getElementById('Phone');
const eMail= document.getElementById('Email');
const password = document.getElementById('password');


// Add eventListeners
fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
password.addEventListener("blur", validatePassword);
eMail.addEventListener("blur", validateEmail);


//Create Validation Functions

// Function to validate Full Name
function validateFullName(){
    // Full name shouid be any 3 or more charchters then one space then any 3 or more charchters
    const FullName_regEx = /^[A-Za-z]/;

    if(!FullName_regEx.test(fullName.value)){
        // if Full Name False | has an Error do next Line
        notValid(fullName);
        this.nextElementSibling.innerText = "Name was not in the correct format";
    }
    else{ // if True
        Valid(fullName);
        this.nextElementSibling.innerText = "";
    }
}

// Function to validate phone Number
function validatePhone(){
    const phone_regEx = /^(01)(0|1|2|5)[0-9]{8}$/;

    if(!phone_regEx.test(phone.value)){
        // if Full Name False | has an Error do next Line
        notValid(phone); // call this function 
        this.nextElementSibling.innerText = "Phone Number not Correct";
    }
    else{ // if True
        Valid(phone);
        this.nextElementSibling.innerText = "";
    }
}

function validatePassword(){
    // any char or number at least 8 or more
    const pass_regEx = /^[a-zA-Z0-9]{8,}$/;

    if(!pass_regEx.test(password.value)){
        // if Full Name False | has an Error do next Line
        notValid(password); // call this function 
        this.nextElementSibling.innerText = "Password at least 8 char or numbers";
    }
    else{ // if True
        Valid(password);
        this.nextElementSibling.innerText = "";
    }

}

function validateEmail(){
    const emil_regEx = /^[a-z0-9\.\_]{3,}\@[a-z]{3,}(.com|.org|.net)$/i;
    if(!emil_regEx.test(eMail.value)){
        // if Full Name False | has an Error do next Line
        notValid(eMail); // call this function 
        this.nextElementSibling.innerText = "Emai should be ex someone@gmail.com";
    }
    else{ // if True
        Valid(eMail);
        this.nextElementSibling.innerText = "";
    }
}


// we can reuse notValid & Valid function instaed of writting it in Full name and phone ... etc
function notValid(input){
        input.classList.add("notValid");
        input.classList.remove("Valid");
        
}

function Valid(input){
        input.classList.remove("notValid");
        input.classList.add("Valid");
}

document.querySelector("section").addEventListener("submit",
(e) => {
    e.preventDefault();
    //debugger;
    validateForm();
});

function validateForm(){
    // debugger;

    var tstName= document.getElementById('FullName').value;
    var tstmail= document.getElementById('Email').value;
    var tspass= document.getElementById('password').value;
    var inputs = document.querySelectorAll("form input");
    // console.log(inputs)
    if(
        fullName.classList.contains("Valid") && 
        phone.classList.contains("Valid") && 
        password.classList.contains("Valid") && 
        eMail.classList.contains("Valid")
    ){
        // strt
        //Uncaught ReferenceError: CreateCookie is not defined
       // debugger;
        var Exp = new Date();
        Exp.setDate(Exp.getDate()+1);
        CreateCookie("FullName",tstName,Exp);
        CreateCookie("Email",tstmail,Exp);
        CreateCookie("Password",tspass,Exp);
        //strt
        document.querySelector("form").submit();
    }
    else{
        alert('Validate All Fields Please');
        return;
    }
}

try{
   // debugger;
    if(GetCookie("FullName") && GetCookie("Email")){
        location.replace("loader.html");
    }
}catch{

}