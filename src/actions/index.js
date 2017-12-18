import shop from "../api/shop";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";


export const getAllProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products: shop.getProducts()
});
