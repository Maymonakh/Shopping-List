import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';



const Product = ({ product, onAddToCart }) => {
  return (
    <Card>
      <CardMedia component="img" alt={product.name} height="220" image={product.image} />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          ${product.price}
        </Typography>
        <Button onClick={() => onAddToCart(product)} variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;