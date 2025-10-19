import { useEffect, useState } from "react";
import { getCart, saveCart } from "./cartUtils";
import axios from "axios";
import "./Cart.css";

function Cart() {

  const [items, setItems] = useState([]);

  // Load cart with product details
  const loadCart = async () => {
    const cart = getCart(); // [{id:117, quantity:2}, {id:112, quantity:1}]
    if (cart.length === 0) {
      setItems([]);
      return;
    }

    const response = await  axios.post(
      "http://localhost:3000/api/products/byIds",
      { ids: cart.map((c) => c.id) }
    );
    console.log(response)
    // return all products that user added to cart
         const products =  [
         {id:13,image:coffeepot, title:"Coffee Pots", desc:"250ml,350ml,550ml",price:13.75,isInStock:true},
          {id:14,image:oven,title:"Oven Set 3 pieces",desc:"28cm,30cm,34cm", price:45,isInStock:true},
         {id:15,image:cookwareset,title:"Cookware Set",desc:"Multiple colors available" ,price:193.75,isInStock:true},
         {id:16,image:vaccumjug,title:"Cookware Set",desc:"Preserve heat and cold",price:10.65,isInStock:true},
         ]
    const merged = cart.map((c) => {
      const product = products.find((p) => p._id === c.id);
      return {
        ...product,
        quantity: c.quantity,
      };
    });

    setItems(merged);
  };
 
  // to make sure that the function is called once the page is opened
  useEffect(() => {
    loadCart();
  }, []);

  const increment = (id) => {
    let cart = getCart();
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(cart);
    loadCart();
  };

  const decrement = (id) => {
    let cart = getCart();
    // search item by id in the cart and decrease by 1
    cart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(cart); // update the cart in localstorage
    loadCart();
  };

  const removeItem = (id) => {
    let cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
    loadCart();
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
       <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item._id} className="cart-card">
              <img src={item.image} alt={item.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-desc">{item.desc}</p>
                <p className="product-price">${item.price}</p>
              </div>
              <div className="cart-controls">
                <div className="quantity-controls">
                  <button onClick={() => decrement(item._id)} className="cart-btn">−</button>
                  <span className="cart-qty">{item.quantity}</span>
                  <button onClick={() => increment(item._id)} className="cart-btn">+</button>
                </div>
                <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeItem(item._id)} className="cart-remove">×</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3 className="cart-total-price">Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;