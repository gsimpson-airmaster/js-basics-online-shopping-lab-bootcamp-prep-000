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
  product[item] = Math.floor((Math.random() * 100));
  cart.push(product);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  s1 = "Your shopping cart is empty";
  s2 = "In your cart, you have ";
  if(cart.length > 0){
    if(cart.length > 1) {
        
    }
    else {
      s2 += `${cart[0][key]} at $${cart[0][value]}.`;
    }
    
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
