import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;