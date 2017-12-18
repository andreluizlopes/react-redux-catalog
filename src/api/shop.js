/**
 * Mocking client-server processing
 */


import _products from './products.json';

const TIMEOUT = 100


export default {
  getProducts: () => {return _products},
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}