import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Container } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ProductComponent from './ProductComponent';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/actions/Productactions';

const ProductListing = () => {
  const prod = useSelector((state) => state);
  console.log(prod);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <ProductComponent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 1400px;
  flex-wrap: wrap;
  margin: auto;
`;

export default ProductListing;
