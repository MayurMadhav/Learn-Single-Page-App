let NameError = document.getElementById('name_error');
let PhoneError = document.getElementById('phone_error');
let EmailError = document.getElementById('email_error')

function validateName(){
    let name1 = document.getElementById('name1').value;

    if(!name1.match(/^[A-Za-z. ]{3,30}$/)) {
        NameError.innerHTML = 'Name is invalid';
        return false;
   }

    NameError.innerHTML = 'valid';
    return true;
}

function validatePhone(){
    let phone1 = document.getElementById('phone1').value;

    if(phone1.length == 0){
        PhoneError.innerHTML = 'phone number is required'
    }  
    if(phone1.length != 10){
        PhoneError.innerHTML = 'phone no should be 10 digits'
    }
    if(!phone1.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = 'Phone number is invalid'
        return false;
    }
    PhoneError.innerHTML = 'Phone number is valid';
    return true;
}

function validateEmail(){
    let email1 = document.getElementById('email1').value;

    if(email1.length == 0){
        EmailError.innerHTML = 'Email is required'
    }
 if(!email1.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        EmailError.innerHTML = 'Invalid Email'
        return false;
}
    EmailError.innerHTML = 'Valid Email'
    return true;

}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length")

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  myInput.onkeyup = function() {
      var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");  
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
  var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


/*
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("buttons");
*/

function cookie_func(){
  var cookie_name = document.getElementById("name1").value
    var cookie_email = document.getElementById("email1").value

    if((cookie_name.trim() != "")  && (cookie_email.trim() != ""))
    {
        document.cookie = "name=" + cookie_name + ";expires=16 Dec 2022 00:00:00 UTC; path=/"
        document.cookie = "email=" + cookie_email + ";expires=16 Dec 2022 00:00:00 UTC; path=/"
        localStorage.setItem('name', cookie_name)
        localStorage.setItem('email', cookie_email)
        sessionStorage.setItem('name', cookie_name)
        sessionStorage.setItem('email', cookie_email)
        alert("Cookie Added")
        cookieBox.classList.add("hide");
    }
    else{
      alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser or please complete form.");
    }
  }
    /*
    document.cookie = "Login = action; expires=16 Dec 2022 12:00:00 UTC; path=/"
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
        //document.body.style.backgroundImage = "url('loginPage.jpg')";
      }else{ //if cookie not set then alert an error
        //document.body.style.background = "orange";
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("Login = action"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

*/

    
/*var nameRegex = /^[A-Za-z. ]{3,30}$/ ;
if (name1.match(nameRegex)){
    true;
}
/^[A-Za-z]*\s{1}[A-Za-z]*$/
/^[0-9]{10}$/
else{
    NameError.innerHTML="Please enter valid name.";
    return false;
}
/*
/*
name1.addEventListener('keyup',function(e) {
  console.log(e.which);
  if(e.which==90 || e.which==88 || e.which==67 || e.which==86 || e.which==66  || e.which==78 || 
    e.which==77 || e.which==76 || e.which==75 || e.which==74 ||  e.which==80 || e.which==79 ||
   e.which==73 || e.which || e.which==85 || e.which==89 || e.which==84 || e.which==82 || 
     e.which==69 || e.which==87 || e.which==81){
    NameError.innerHTML='Valid';
  }
  else{
    NameError.innerHTML="Please enter valid name.";
  }
  */
  
//}); 