import React from "react";
import styled from "styled-components";

const ProductQuantity = ({ quantity, handleSubmit, handleChange }) => {
  return (
    <QuantityWrapper>
        <form onSubmit={handleSubmit}>
            <input type="number" value={quantity} onChange={handleChange}/>
            <input type="submit" />
        </form>
    </QuantityWrapper>
  );
};

const QuantityWrapper = styled.div`
    display: flex;
`;

export default ProductQuantity;
