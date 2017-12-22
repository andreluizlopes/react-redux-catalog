import chai, { expect } from 'chai';
import { addToCart, removeToCart, updateCart } from '../../actions';

describe('actions', () => {

  it('updateCart has the correct action type', () => {
    const action = updateCart();
    expect(action.type).to.equal('ADD_TO_CART');
  });

});
