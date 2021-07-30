import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsComponent = ({ products }) => {
  return (
    <>
      {products.orderDetails.map((subItem) => (
        <ProductCard product={subItem} totalPrice={subItem.totalPrice} quantity={subItem.quantity} key={subItem.id} />
      ))}
    </>
  );
};


export default ProductsComponent;
