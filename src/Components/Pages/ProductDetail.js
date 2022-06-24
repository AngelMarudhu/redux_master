import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProduct } from '../Redux/actions/Productactions';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;

  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProducts();
  }, [productId]);

  return (
    <div>
      {Object.keys(product) === 0 ? (
        <h1>Loading......</h1>
      ) : (
        <Container>
          <Content>
            <img src={image} alt={title} />

            <div>
              <Titles>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <div>
                  <p>{description}</p>
                </div>
              </Titles>
              <Category>
                <h3>{category}</h3>
                <Button>Add To Cart</Button>
              </Category>
            </div>
          </Content>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 1128px;
  height: 100%;
  margin: 10px;
  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid blue;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(0.8);
  }

  img {
    width: 500px;
    height: 500px;
    object-fit: contain;
    background-color: transparent;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(0.8);
    }
  }
`;

const Titles = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;
const Category = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-left: 10px;
  }

  Button {
    height: 60px;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

export default ProductDetail;
