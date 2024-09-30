function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update the display for cart items
function updateCartItems() {
    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const listItem = document
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(item.id);
        listItem.appendChild(removeBtn);
        cartItemsEl.appendChild(listItem);
    });

    totalCostEl.textContent = `Total: $${total.toFixed(2)}`;

    if (cart.length > 0) {
        cartContainerEl.classList.remove('hidden');
    } else {
        cartContainerEl.classList.add('hidden');
    }
}

updateCart();
