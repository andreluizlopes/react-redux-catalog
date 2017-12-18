import { loadState, saveState } from '../store/localStorage';
import _ from 'lodash';

export function updateCart(products) {
  return {
    type: "ADD_TO_CART",
    products
  };
}

export function addToCart(dataProduct) {
    return (dispatch) => {
      let cartPersist = loadState();
      let newCartPersist = {};
      
      // Cart is empty
      if (!cartPersist) {
        newCartPersist.products = [{
          "sku": dataProduct.sku,
          "size": dataProduct.size,
          "title": dataProduct.title,
          "price": dataProduct.price,
          "style": dataProduct.style,
          "total": 1
        }];
      }

      // there are products in cart
      if (cartPersist) {
        newCartPersist = cartPersist;
        let currentCartProduct = _.find(cartPersist.products, {sku: dataProduct.sku, size: dataProduct.size});
        // Product already on cart and plus total
        if (currentCartProduct) {
          const productIndex = _.indexOf(cartPersist.products, currentCartProduct);
          currentCartProduct.total++;
          if (productIndex >= 0) {
            newCartPersist.products[productIndex] = currentCartProduct;
          }
        // New product on cart
        } else {
          let newProduct = {
            "sku": dataProduct.sku,
            "size": dataProduct.size,
            "title": dataProduct.title,
            "price": dataProduct.price,
            "style": dataProduct.style,
            "total": 1
          };
          newCartPersist.products.push(newProduct);
        }
      }

      saveState(newCartPersist);
      dispatch(updateCart(newCartPersist));

    };
}

export function removeToCart(dataProduct) {
  return (dispatch) => {
    let cartPersist = loadState();
    _.remove(cartPersist.products, {sku: dataProduct.sku, size: dataProduct.size});

    saveState(cartPersist);
    dispatch(updateCart(cartPersist));

  }
}