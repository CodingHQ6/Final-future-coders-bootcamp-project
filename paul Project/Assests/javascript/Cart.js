//  Declaring variables
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let counter1 = document.getElementById("counter1");
let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let counter2 = document.getElementById("counter2");
let firstProduct = document.getElementById("firstProduct");
let secondProduct = document.getElementById("secondProduct");
let subTotal = document.getElementById("subTotal");
let total = document.getElementById("total");
let paragraph = document.getElementById("paragraph");
let checkbox = document.getElementById("checkbox");
let count1 = 0;
let count2 = 0;
let subTotal1 = 0;
let subTotal2 = 0;
let grandTotal;
// Adding an event listener to add or reduce the number of Headphones to be added to cart and calculate the subtotal for the Headphone
btn1.addEventListener("click", function () {
    count1 = count1 + 1;
    counter1.textContent = count1;
    subTotal1 = Number(count1 * 650);
    firstProduct.textContent = `$${subTotal1}`;
    grandTotal = Number(subTotal1) + Number(subTotal2);
    if (grandTotal !== "NaN") {
        total.textContent = "$" + grandTotal;
        subTotal.textContent = "$" + grandTotal;
    } else {
        let grandTotal1 = Number(subTotal1);
        total.textContent = "$" + grandTotal1;
        subTotal.textContent = "$" + grandTotal1;
    }
});
btn2.addEventListener("click", function () {
    if (count1 > 0) {
        count1 = count1 - 1;
        counter1.textContent = count1;
        subTotal1 = count1 * 650;
        firstProduct.textContent = `$${subTotal1}`;
        grandTotal = Number(subTotal1) + Number(subTotal2);
        if (grandTotal == "NaN") {
            let grandTotal1 = Number(subTotal1);
            total.textContent = "$" + grandTotal1;
            subTotal.textContent = "$" + grandTotal1;
        } else {
            total.textContent = "$" + grandTotal;
            subTotal.textContent = "$" + grandTotal;
        }
    }
    else {
        counter1.textContent = 0;
        firstProduct.textContent = `$0`;
        grandTotal = Number(subTotal2);
        total.textContent = "$" + grandTotal;
        subTotal.textContent = "$" + grandTotal;
    }
});
// Adding an event listener to add or reduce the number of H1 Gamepad to be added to cart and calculate the subtotal for the H1 Gamepad
btn01.addEventListener("click", function () {
    count2 = count2 + 1;
    counter2.textContent = count2;
    subTotal2 = count2 * 550;
    secondProduct.textContent = `$${subTotal2}`;
    grandTotal = Number(subTotal1) + Number(subTotal2);
    if (grandTotal == "NaN") {
        let grandTotal2 = Number(subTotal2);
        total.textContent = "$" + grandTotal2;
        subTotal.textContent = "$" + grandTotal2;
    } else {
        total.textContent = "$" + grandTotal;
        subTotal.textContent = "$" + grandTotal;
    }
});
btn02.addEventListener("click", function () {
    if (count2 > 0) {
        count2 = count2 - 1;
        counter2.textContent = count2;
        subTotal2 = count2 * 550;
        secondProduct.textContent = `$${subTotal2}`;
        grandTotal = Number(subTotal1) + Number(subTotal2);
        grandTotal = Number(subTotal1) + Number(subTotal2);
        if (grandTotal == "NaN") {
            let grandTotal2 = Number(subTotal2);
            total.textContent = "$" + grandTotal2;
            subTotal.textContent = "$" + grandTotal2;
        } else {
            total.textContent = "$" + grandTotal;
            subTotal.textContent = "$" + grandTotal;
        }
    }
    else {
        counter2.textContent = 0;
        secondProduct.textContent = `$0`;
        grandTotal = Number(subTotal1)
        total.textContent = "$" + grandTotal;
        subTotal.textContent = "$" + grandTotal;
    }

});

paragraph.addEventListener("click", function () {
    localStorage.setItem("Total", grandTotal);
    localStorage.setItem("SubTotal1", subTotal1);
    localStorage.setItem("Subtotal2", subTotal2);

});
