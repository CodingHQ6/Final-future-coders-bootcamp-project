document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = [
    {
      id: 1,
      name: "AirPods",
      price: 29.99,
      price2: 400.99,
      image: "../assets/images/applepods.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                   recusandae? Tempora`,
    },
    {
      id: 2,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "../assets/images/aipods2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 3,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "../assets/images/airpods3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 4,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "../assets/images/airpods4.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 5,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "../assets/images/controller1.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 6,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "../assets/images/controller2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 7,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "../assets/images/controller3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 8,
      name: "Omega HeadSet",
      price: 59.99,
      price2: 300.99,
      image: "../assets/images/hedset1.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 9,
      name: "Omega HeadSet",
      price: 99.99,
      price2: 300.99,
      image: "../assets/images/hedset2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 10,
      name: "Omega HeadSet",
      price: 19.99,
      price2: 300.99,
      image: "../assets/images/headset3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 11,
      name: "Omega HeadSet",
      price: 69.99,
      price2: 300.99,
      image: "../assets/images/headset4.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 12,
      name: "iPhone 14",
      price: 59.99,
      price2: 300.99,
      image: "../assets/images/iphone14.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 13,
      name: "PlayStation 5",
      price: 599.99,
      price2: 1300.99,
      image: "../assets/images/ps5.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 14,
      name: "Gucci Bag",
      price: 5599.99,
      price2: 11300.99,
      image: "../assets/images/handbag.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    // Add more products as needed
  ];

  const checkoutContainer = document.getElementById("checkout");

  if (cart.length === 0) {
    checkoutContainer.innerHTML =
      '<p>Your cart is empty. <a href="index.html">Go back to shopping.</a></p>';
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item);
    if (product) {
      total += product.price;
      const productElement = document.createElement("div");
      // productElement.classList.add("");
      productElement.innerHTML = `

<div class="d-flex" style="justify-content: space-between;">
                        <div class="">
                            <div class="div">
                                <img src="${product.image}"
                                    alt="" class="container">
                                <p class="para">${product.name}</p>
                            </div>
                        </div>
                        <div class="">
                            <p id="firstProduct1" class="text Gamepad">$${product.price}</p>
                        </div>
                    </div>
            `;
      checkoutContainer.appendChild(productElement);
    }
  });

  const totalElement = document.getElementById("totalAmount");
  totalElement.innerHTML = `<h3>$${total.toFixed(2)}</h3>`;
  // checkoutContainer.appendChild(totalElement);

  const confirmButton = document.getElementById("confirmOrder");
  // confirmButton.textContent = "Confirm Order";
  confirmButton.onclick = confirmOrder;
  // checkoutContainer.appendChild(confirmButton);
});

function confirmOrder() {
  localStorage.removeItem("cart"); // Clear the cart
  alert("Your order has been confirmed! Thank you for shopping with us.");
  window.location.href = "../index.html";
}

//cart
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image: "https://via.placeholder.com/200",
    },
  ];

  const cartContainer = document.getElementById("cart");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    console.log(product);
    if (product) {
      const pElelement = document.getElementById("pElelement");
      total += product.price * item.quantity;
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Quantity: <input type="number" value="${
                  item.quantity
                }" min="1" max="10" onchange="updateCart(${
        product.id
      }, this.value)"></p>
                <p>Subtotal: $${(product.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${
                  product.id
                })">Remove from Cart</button>
            `;
      pElelement.appendChild(productElement);
    }
  });

  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
  cartContainer.appendChild(totalElement);

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Proceed to Checkout";
  checkoutButton.onclick = () => {
    if (isUserLoggedIn()) {
      window.location.href = "checkout.html";
    } else {
      alert("You must be logged in to checkout.");
      window.location.href = "login.html";
    }
  };
  cartContainer.appendChild(checkoutButton);
});

function updateCart(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((i) => i.productId === productId);
  if (item) {
    item.quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Reload the page to reflect changes
  }
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.productId !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // Reload the page to reflect changes
}

function isUserLoggedIn() {
  // Mock function to check if a user is logged in
  return localStorage.getItem("loggedIn") === "true";
}
