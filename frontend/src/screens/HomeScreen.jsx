import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getListProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function HomeScreen() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );
 
  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
