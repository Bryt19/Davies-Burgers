
n updateCartDisplay() {
    const cartDisplay = document.getElementById('cartDisplay');
    cartDisplay.innerHTML = ''; // Clear previous cart items
    if (cart.length === 0) {
        cartDisplay.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartDisplay.appendChild(itemElement);
        });
    }
}

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
    alert(`${name} has been added to your cart!`);
}

// Event listener for the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! We will contact you shortly.`);
        // Reset form fields
        document.getElementById('contactForm').reset();
    }
});

// Event listeners for the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.parentElement;
        const itemName = menuItem.querySelector('h3').textContent;
        const itemPrice = parseFloat(menuItem.querySelector('p').textContent.replace('$', ''));
        addToCart(itemName, itemPrice);
    });
});

// Optional: Display cart contents on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
