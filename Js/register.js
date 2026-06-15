const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const fullName =
document.getElementById("fullName").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const farmType =
document.getElementById("farmType").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

const user = {

fullName,
email,
phone,
farmType,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Registration successful!"
);

window.location.href =
"login.html";

});