import { loadState } from '../store/localStorage';
const ADD_TO_CART = "ADD_TO_CART";
let initialState = loadState();
if (!initialState) {
  initialState = [];
}

export function updateCart(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return action.products;
    default:
      return state;
  }
}

