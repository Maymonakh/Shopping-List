// Cart.js
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <Typography variant="h5">Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cart.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <Typography variant="h6">
                    {item.name} <span className="quantity">x{item.quantity}</span>
                  </Typography>
                  <Typography variant="body2">Price: ${item.price}</Typography>
                </div>
                <Button onClick={() => onRemoveFromCart(item)} variant="contained" color="secondary">
                  Remove
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Cart;
