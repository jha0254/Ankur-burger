let cart = [];
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const total = document.getElementById('total');
  cartList.innerHTML = '';
  let sum = 0;
  cart.forEach(b => {
    const li = document.createElement('li');
    li.textContent = `${b.item} - ₹${b.price}`;
    cartList.appendChild(li);
    sum += b.price;
  });
  total.textContent = sum;
}
function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
  }
}
