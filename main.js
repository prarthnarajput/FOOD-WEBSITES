// Simple client-side cart using localStorage
const cartKey = 'toh_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(cartKey)) || []; }
  catch { return []; }
}

function saveCart(items) {
  localStorage.setItem(cartKey, JSON.stringify(items));
}

function addItem(name, price) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price: Number(price), qty: 1 });
  }
  saveCart(cart);
  renderCart();
}

function removeItem(name) {
  let cart = getCart().filter(i => i.name !== name);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!list || !totalEl) return;

  const cart = getCart();
  list.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    const left = document.createElement('span');
    left.textContent = `${item.name} × ${item.qty}`;
    const right = document.createElement('span');
    right.textContent = `₹${item.price * item.qty}`;

    li.appendChild(left);
    li.appendChild(right);
    list.appendChild(li);

    total += item.price * item.qty;
  });

  totalEl.textContent = `₹${total}`;
}

// Wire up add-to-cart buttons on the menu page
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      addItem(btn.dataset.name, btn.dataset.price);
    });
  });
});