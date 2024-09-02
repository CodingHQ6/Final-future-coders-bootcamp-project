let to = document.getElementById("to");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4= document.getElementById("a4");

to.addEventListener("click", function() {
    a1.textContent = "Home";
    a2.textContent = "Contact";
    a3.textContent = "About";
    a4.textContent = "Sign Up";
})