import React, { useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/CheckoutForm';
import products from './data';

const App = () => {
  
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotalAmount(totalAmount + product.price);
  };

  const removeFromCart = (product) => {
    const itemToRemove = cart.find((item) => item.id === product.id);

    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
      }
      setTotalAmount(totalAmount - product.price);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <ProductGrid products={products} onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      <Checkout cart={cart} totalAmount={totalAmount} />
    </div>
  );
};

export default App;
