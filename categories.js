
const categories = ['all', 'electronics', 'clothing', 'books'];

function displayCategories() {
    categories.forEach(category => {
        const categoryEl = document.createElement('button');
        categoryEl.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryEl.onclick = () => filterProducts(category);
        categoryFilterEl.appendChild(categoryEl);
    });
}

function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

// Load categories and display them
displayCategories();
