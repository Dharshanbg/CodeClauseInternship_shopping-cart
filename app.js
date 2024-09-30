let cart = [];
const productListEl = document.getElementById('product-list');
const cartContainerEl = document.getElementById('cart-container');
const cartCountEl = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const totalCostEl = document.getElementById('total-cost');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryFilterEl = document.getElementById('category-filter');

function displayProducts(products) {
    productListEl.innerHTML = '';
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
            <button onclick="viewProductDetails('${product.id}')">View Details</button>
        `;
        productListEl.appendChild(productEl);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartCountEl.textContent = cart.length;
    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsEl.appendChild(listItem);
    });

    totalCostEl.textContent = `Total: $${total.toFixed(2)}`;

    if (cart.length > 0) {
        cartContainerEl.classList.remove('hidden');
    } else {
        cartContainerEl.classList.add('hidden');
    }
}

// Checkout function
checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
});

// Function to view product details
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Name: ${product.name}\nDescription: ${product.description}\nPrice: $${product.price}`);
}

// Load products and display them
displayProducts(products);
