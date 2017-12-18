import shop from "../api/shop";
const products = shop.getProducts();

export function getProducts(state = products, action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action;
    default:
      return state;
    }
}