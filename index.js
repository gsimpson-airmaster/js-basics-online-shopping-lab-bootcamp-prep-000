var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var product = {};
  var cost = Math.floor((Math.random() * 100))
  product.itemName = item;
  product.itemPrice = cost;
  cart.push(product);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var s1 = "Your shopping cart is empty.";
  var s2 = "In your cart, you have ";
  if(cart.length > 0){
    if(cart.length > 1) {
        
    }
    else {
      s2 += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    
    return s2;
  }
  else {
    return s1;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
