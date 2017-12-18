import { combineReducers } from 'redux';
import { getProducts } from './products';
import { updateCart } from './cart';

export default combineReducers({
  getProducts,
  updateCart
});
