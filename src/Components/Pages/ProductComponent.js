import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ProductComponent = () => {
  const prod = useSelector((state) => state.allProducts.products);
  console.log(prod);

  const renderList = prod.map((prods) => {
    const { id, image, title, price, category } = prods;
    return (
      <Container key={id}>
        <Content>
          <Link to={`products/${id}`}>
            <img src={image} alt={title} />
          </Link>
          <Titles>
            <p>{title}</p>
            <h3>{price}</h3>
          </Titles>
          <Category>
            <h3>{category}</h3>
            <Button>Add To Cart</Button>
          </Category>
        </Content>
      </Container>
    );
  });
  return renderList;
};

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(0.8);
  }

  img {
    width: 200px;
    height: 200px;
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
  width: 100%;
  height: 130px;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
`;
const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-left: 10px;
  }

  Button {
    border-radius: 10px;
    margin-right: 10px;
  }
`;

export default ProductComponent;
