const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Message submitted successfully!"
);

form.reset();

});