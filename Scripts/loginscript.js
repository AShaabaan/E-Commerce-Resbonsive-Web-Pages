// get elements from the DOM
const eMail= document.getElementById('Email');
const password = document.getElementById('password');

// window.load= function(){
//     
// }
// Add eventListeners
password.addEventListener("blur", validatePassword);
eMail.addEventListener("blur", validateEmail);


//Create Validation Functions

function validatePassword(){
    // any char or number at least 8 or more
    const pass_regEx = /^[a-zA-Z0-9]{8,}$/;

    if(!pass_regEx.test(password.value)){
        // if Full Name False | has an Error do next Line
        notValid(password); // call this function 
        this.nextElementSibling.innerText = "Password Incorrect!";
    }
    else{ // if True
        Valid(password);
        console.log(password);
        this.nextElementSibling.innerText = "";
    }

}

function validateEmail(){
    const emil_regEx = /^[a-z0-9\.\_]{3,}\@[a-z]{3,}(.com|.org|.net)$/i;
    if(!emil_regEx.test(eMail.value)){
        // if Full Name False | has an Error do next Line
        notValid(eMail); // call this function 
        this.nextElementSibling.innerText = "Email not Valid!";
    }
    else{ // if True
        Valid(eMail);
        console.log(eMail);
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

    validateForm();
});

function validateForm(){
    const inputs = document.querySelectorAll("form input");
     //console.log(inputs)
    if(
        password.classList.contains("Valid") && 
        eMail.classList.contains("Valid")
    ){
       // debugger;
        
        var tstmail= document.getElementById('Email').value;
        var tstpassword = document.getElementById('password').value;
        // console.log(tstmail);
        // console.log(tstpassword);
        try{
            
            //validate user exists
           // debugger;
            var XHR = new XMLHttpRequest();
            XHR.open("get","../Data/LoginData.json",false);
            XHR.onreadystatechange = function(){
                var found = false;
                var user = {};
                if(XHR.readyState == 4 && XHR.status == 200){
                   var  Data = JSON.parse(XHR.responseText);
                    for(item of Data){
                        if(item.email == tstmail && item.password == tstpassword){
                            found = true;
                            user = item;
                        }
                    }
                }
               // debugger;
                console.log(XHR.readyState);
                if(found){
                    
                    var Exp = new Date();
                     Exp.setDate(Exp.getDate()+1);
                    CreateCookie("Password",user.password,Exp);
                    CreateCookie("Email",user.email,Exp);
                    location.replace("Index.html");
                    document.querySelector("section").submit();
                    //document.forms[0].submit();
                }
                else{
                    //e.preventDefault();
                    alert("User not found");
                }
            }
           // console.log(XHR.readyState);
            XHR.send();

    
        }catch{
            //e.preventDefault();
            alert("Please fill correct data");
        }

       
    }
    else{
        alert(' Please Enter Your Valid Data!');
        return;
    }
}
try{
          if(GetCookie("FullName") && GetCookie("Email")){
                location.replace("loader.html");
            }
         }catch{
        
         }
/**
 * 
 *  
 * 
 * 
 *  */ 