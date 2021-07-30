import React, {useState} from 'react';
import styled from 'styled-components';
import ProductQuantity from './ProductQuantity';
import {updateProduct} from '../services/updateProduct';

const ProductCard = ({ product, totalPrice, quantity }) => {
    const [quantityData, setQuantityData] = useState(quantity);
    const updateProductInServer = async (e) => {
      e.preventDefault();
      const payload = {
        image: product.productDetail.webUrl,
        title: product.name,
        quantity: quantityData,
        price: totalPrice
      }
      const result = await updateProduct(payload);
      console.log(result);
    }

    const handleChange = (e) => {
        console.log(e);
        setQuantityData(e.target.current);
    }

    return(
        <ProductWrapper key={product.id}>
          <ProductImage>
            <img src={product.productDetail.webUrl} alt={product.name} />
          </ProductImage>
          <ProductDescription>
            <h3>{product.name}</h3>
          </ProductDescription>
          <ProductQuantity quantity={quantityData} handleSubmit={updateProductInServer} handleChange={handleChange}/>
          <ProductPrice>
            <p>${totalPrice}</p>
          </ProductPrice>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ProductImage = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;

  img {
    height: auto;
    width: 100%;
  }
`;

const ProductDescription = styled.div`

  h3 {
    text-align: left;
    margin-left: 20px;
  }
`;

const ProductPrice = styled.div``;


export default ProductCard;
