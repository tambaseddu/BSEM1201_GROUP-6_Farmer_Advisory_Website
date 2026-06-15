const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const user =
JSON.parse(
localStorage.getItem("user")
);

if(
user &&
user.email === email &&
user.password === password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

alert("Login Successful");

window.location.href =
"dashboard.html";

}
else{

alert(
"Invalid Email or Password"
);

}

});