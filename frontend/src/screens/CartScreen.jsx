import React from 'react';
import { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import Message from '../components/Message';

function CartScreen() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId')
    ? searchParams.get('productId')
    : null;
  const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  let navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleRemoveFromCart = (productId) => {};

  const handleCheckout = () => {
    navigate('../login?redirect=shipping');
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to={'/'}>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.productId}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>$ {item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as={'select'}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => handleRemoveFromCart(item.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
