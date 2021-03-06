import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import makeStyles from "./styles";

/*const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5" },
  { id: 2, name: "MacBook", description: "Apple Macbook.", price: "$4" },
];*/

const Products = ({ products, onAddToCart }) => {
  const classes = makeStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
