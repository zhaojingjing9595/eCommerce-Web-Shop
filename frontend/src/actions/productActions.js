import axios from 'axios';
import {
    PRODUCT_FAIL,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from '../constants/productConstants';


export const getListProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const { data } = await axios.get(`/api/products`);
        dispatch({type:PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload:error.response && error.data.message ?error.data.message : error.message})
    }
    
}


export const GetProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAIL,
      payload:
        error.response && error.data.message
          ? error.data.message
          : error.message,
    });
  }
};