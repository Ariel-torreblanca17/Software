

let cart = [];
let total = 0;


function addToCart(productName, productPrice) {

    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        
        existingProduct.quantity++;
    } else {
       
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

   
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cart-count');


    cartItems.innerHTML = '';


    total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

    
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${item.name} x${item.quantity}`;
        const span = document.createElement('span');
        span.textContent = `$${itemTotal.toFixed(2)}`;
        li.appendChild(span);
        cartItems.appendChild(li);
    });


    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}


function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    window.location.href = 'ubicacion.html';
}
