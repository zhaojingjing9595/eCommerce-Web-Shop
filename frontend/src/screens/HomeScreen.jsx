import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import productReducer from '../reducer/productReducer';
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const { loading, products, error} = productList
  useEffect(() => { 
    dispatch(listProducts())
  }, [ dispatch ])
 
  return (
    <>
      <h1>Latest Products</h1>
      {loading && <h2>Loading...</h2>}
      { error && <h3>error</h3>}
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
