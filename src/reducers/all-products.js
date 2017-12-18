import shop from "../api/shop";
const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
const products = shop.getProducts();

const allProducts = (state = products, action) => {
  if (action.type === RECEIVE_PRODUCTS) {
    return action.products;
  }
  return state;
}

export default allProducts;