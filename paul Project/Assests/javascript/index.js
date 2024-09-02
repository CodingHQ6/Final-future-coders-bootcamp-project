let checkbox = document.getElementById("checkbox");
let firstProduct1 = document.getElementById("firstProduct1");
let secondProduct1 = document.getElementById("secondProduct1");
let subTotal3 = document.getElementById("subTotal3");
let total3 = document.getElementById("total3");
checkbox.addEventListener("click", function(){
    let paul = localStorage.getItem("Total");
    let emma = localStorage.getItem("SubTotal1");
   let lum = localStorage.getItem("Subtotal2");
   console.log(emma);
   subTotal3.textContent = paul;
   total3.textContent = paul;
   firstProduct1.textContent = emma;
   secondProduct1.textContent = lum;
});