import { combineReducers } from 'redux';
import allProducts from './all-products';

const catalogApp = combineReducers({
  allProducts
});

export default catalogApp;
