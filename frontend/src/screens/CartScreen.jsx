import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

function CartScreen() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId')
    ? searchParams.get('productId')
    : null;
  const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>cart</div>;
}

export default CartScreen;
