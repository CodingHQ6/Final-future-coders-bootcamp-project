// wishlist
document.addEventListener("DOMContentLoaded", function () {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const products = [
    {
      id: 1,
      name: "AirPods",
      price: 29.99,
      price2: 400.99,
      image: "assets/images/applepods.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                  necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                   recusandae? Tempora`,
    },
    {
      id: 2,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "assets/images/aipods2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 3,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "assets/images/airpods3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 4,
      name: "AirPods",
      price: 39.99,
      price2: 420.99,
      image: "assets/images/airpods4.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 5,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "assets/images/controller1.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 6,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "assets/images/controller2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 7,
      name: "PlayStation Controller",
      price: 59.99,
      price2: 300.99,
      image: "assets/images/controller3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 8,
      name: "Omega HeadSet",
      price: 59.99,
      price2: 300.99,
      image: "assets/images/hedset1.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 9,
      name: "Omega HeadSet",
      price: 99.99,
      price2: 300.99,
      image: "assets/images/hedset2.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 10,
      name: "Omega HeadSet",
      price: 19.99,
      price2: 300.99,
      image: "assets/images/headset3.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 11,
      name: "Omega HeadSet",
      price: 69.99,
      price2: 300.99,
      image: "assets/images/headset4.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 12,
      name: "iPhone 14",
      price: 59.99,
      price2: 300.99,
      image: "assets/images/iphone14.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 13,
      name: "PlayStation 5",
      price: 599.99,
      price2: 1300.99,
      image: "assets/images/ps5.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    {
      id: 14,
      name: "Gucci Bag",
      price: 5599.99,
      price2: 11300.99,
      image: "assets/images/handbag.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequuntur sint exercitationem velit expedita beatae
                    necessitatibus, distinctio voluptatem dolorum voluptatibus, rerum delectus nemo optio accusantium unde a iure
                    recusandae? Tempora`,
    },
    // Add more products as needed
  ];

  const wishlistContainer = document.getElementById("wishlist");

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlist.forEach((item) => {
    const product = products.find((p) => p.id === item);
    if (product) {
      const productElement = document.createElement("div");
      productElement.classList.add("col-md-3");
      productElement.innerHTML = `
      <div class="product-card">
                   <div class="discount-badge">-25%</div>
                    <img src="${product.image}"
                        alt=" ${product.name} " class="product-image w-100">

                    <div class="add-to-card">
                        <h6 onclick="addToCart(${product.id})">Add To Cart</h6>
                    </div>


                    <div class="product-icons">
                        <span onclick="removeFromWishlist(${product.id})" class="icon wishlist-icon fa fa-trash"></span>
                        <a href="Laliana Gamepad/product-details.html?id=${product.id}" class="nav-link"><span  class="icon view-icon">👁</span></a>
                        
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-pricing">
                        <span class="product-price">$${product.price}</span>
                        <span class="original-price">$${product.price2}</span>
                    </div>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="reviews">(99)</span>
                    </div>
                </div>
            `;
      wishlistContainer.appendChild(productElement);
    }
  });
});

function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter((id) => id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload(); // Reload the page to reflect changes
}
