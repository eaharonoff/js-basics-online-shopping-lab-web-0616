var cart;
cart = [];
//newCart is an array 
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart 
}

function addToCart(item) {
  var price = Math.floor((Math.random()*100))
  var new_item = {[item]: price}
  cart.push(new_item)
  console.log(`${item} has been added to your cart.`)
  return cart 
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  } else {
    var cartHas = []
    for(i=0;i<cart.length;i++){
      var obj = {}
      obj = cart[i]
      var item = Object.keys(obj)[0]
      var price = obj[item]
      cartHas.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${cartHas.join(", ")}.`)
  }
}

function removeFromCart(item) {
 var hasItem = false 
  for(let i = 0; i < cart.length ; i++) {
    if (cart[i].hasOwnProperty(item)){
      hasItem = true
      cart = cart.slice(0,i).concat(cart.slice(i+1))
    }
  }

  if(!hasItem){
    console.log("That item is not in your cart.")
  }

  return cart 
}

function placeOrder(cardNumber){
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  }

  cart = []
  return cart 
}