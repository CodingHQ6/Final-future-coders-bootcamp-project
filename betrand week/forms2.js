const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const forgotForm = document.getElementById('forgot-form');
const forgotButton = document.getElementById('forgot-button');
const forgotLink = document.getElementById('forgot-link');
//const cartButton = document.getElementById('cart');


// Function to show sign up form and hide login form and forgotForm
function showSignupForm() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
    forgotForm.style.display = 'none';
}
// Function to show login form and hide sign up form and forgotForm
function showLoginForm() {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    forgotForm.style.display = 'none';
}
// Function to show forgot form and hide sign up form and login form
function showForgotForm() {
    forgotForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginForm.style.display = 'none';
}

// Event listener for sign up button
signupButton.addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const emailPhoneS = document.getElementById('email-phonenumber').value;
    const password = document.getElementById('signup-password').value;

    // Implement your sign up logic here (e.g., store new user data)
    localStorage.setItem("username", username);
    localStorage.setItem("Email/phone", emailPhoneS);
    localStorage.setItem("password", password);
    alert(`Account created for ${username}! Please log in to continue.`);
    showLoginForm();
});
// Event listener for login button
loginButton.addEventListener('click', () => {
    const emailPhone = document.getElementById('login-emailphone').value;
    const password = document.getElementById('login-password').value;
    let localDataEmailPhone= localStorage.getItem("Email/phone");
    let localDataPassword= localStorage.getItem("password");
    if(emailPhone === localDataEmailPhone && password === localDataPassword){
    // For simplicity, let's assume login is successful
  //  localStorage.setItem('loggedInUser', emailPhone);
  // cartButton.removeAttribute('disabled');
  alert(`Welcome back, ${emailPhone}!`);
    window.open("index.html");
    }else{
        alert("Dont have an account");
    }
});
//Event listener for forgot button
forgotButton.addEventListener('click', () => {
    const paragraph = document.getElementById('forgot-paragraph');
    const forgotEmailPhone = document.getElementById('forgotEmailPhone').value;
    const forgotData=localStorage.getItem("localDataEmailPhone");
    if(forgotEmailPhone === forgotData){
       alert("your password is: "+ localDataPassword);
    }else{
        alert("nothing found please create account");
    }
});
// Event listener for add to cart button
//cartButton.addEventListener('click', () => {
   // const loggedInUser = localStorage.getItem('loggedInUser');

   // if (loggedInUser) {
  //      alert('Item added to cart!');
   // } else {
     //   alert('Please log in to add items to the cart.');
      //  showLoginForm();
   // }
//});


// Event listeners for switch links
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    showForgotForm();
});

// Show login form by default
showSignupForm();