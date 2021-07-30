import React, { useState } from "react";
import styled from "styled-components";
import ProductsComponent from "../components/ProductsComponent";

const CartComponent = ({ orderDetails }) => {
  return (
    <div>
      <Headingswrapper>
        <h3>Image</h3>
        <h3>Product Name</h3>
        <h3>Quantity</h3>
        <h3>Product Price</h3>
      </Headingswrapper>
      {orderDetails.map((item) => (
        <ProductsComponent products={item} key={item.id} />
      ))}
    </div>
  );
};

const Headingswrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export default CartComponent;
