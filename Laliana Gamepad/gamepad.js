// here we targeting the buttons
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let answer = document.getElementById("para");
let count = 0;

add.addEventListener("click", function () {
  count = count + 1;
  answer.textContent = count;
  console.log("clicked plus");
});

sub.addEventListener("click", function () {
  if (count <= 0) {
    answer.textContent = count;
  } else {
    count = count - 1;
    answer.textContent = count;
    console.log("clicked minus");
  }
});
