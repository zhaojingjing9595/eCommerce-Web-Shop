import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { productDetailReducer, productListReducer } from './reducer/productReducer';

const reducer = combineReducers({
  productListReducer: productListReducer,
  productDetailReducer: productDetailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
