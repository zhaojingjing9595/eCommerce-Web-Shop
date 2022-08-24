import React from 'react';
import { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';

function ProductScreen() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // select reducer's return state
  const { loading, product, error } = useSelector(
    (state) => state.productDetailReducer
  );
 

  useEffect(() => {
    // dispatch actions
    dispatch(GetProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Link to={'/'} className="btn btn-dark my-3">
        Go Back
      </Link>
       {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  rating={product.rating}
                  text={`${product.numReviews} review`}
                />
              </ListGroupItem>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="px-2">
                    <Button
                      className="btn-dark"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      ADD TO CART
                    </Button>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
       
      )}
    </>
  );
}

export default ProductScreen;
