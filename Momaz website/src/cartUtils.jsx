export const getCart = () => {
  const cart = localStorage.getItem("cart"); // get cart from local storage
  return cart ? JSON.parse(cart) : [];
};
//gets the total number of items in the cart
export const getCartItemCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}
export const saveCart = (cart) => {

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (productId) => {
  let cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1; // existing.quantity = existing.quantity + 1
  } else {
    // adding new item (object) to cart (array of objects)
    // each object (item) should have id and quantity
    cart.push({ id: productId, quantity: 1 });
  }
   console.log(cart);
  saveCart(cart);
};

/**
 * local storage to save our cart data in browser (locally on your phone/laptop)
 * getItem to get data from local storage
 * setItem to save data to local storage
 */