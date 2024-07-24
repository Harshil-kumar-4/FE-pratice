const itemList = document.getElementById('item-list');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price'); // Add this line

itemList.addEventListener('change', (event) => {
  const selectedItem = event.target.nextElementSibling.innerText;
  const price = parseFloat(selectedItem.split('(')[1].split(')')[0].split('$')[1]); // Extract the price from the selected item

  if (event.target.checked) {
    cartItems.textContent += `Item ${event.target.id.split('item')[1]}\n`;
    totalPrice.textContent = (parseFloat(totalPrice.textContent) + price).toFixed(2); // Add the price to the total price
  } else {
    cartItems.textContent = cartItems.textContent.replace(`Item ${event.target.id.split('item')[1]}\n`, '');
    totalPrice.textContent = (parseFloat(totalPrice.textContent) - price).toFixed(2); // Subtract the price from the total price
  }
});
totalPrice.textContent = '0.00';