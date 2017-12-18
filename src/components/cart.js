import React, { Component } from 'react';
import bagIcon from '../assets/images/bag.svg';
import image from '../assets/images/no-product-image-thumb.png';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-info">
            <img className="cart-bag-icon" src={bagIcon} alt="Cart" />
            <div className="cart-total">3</div>
          </div>
            <span className="cart-title">SACOLA</span>
        </div>
        <div className="cart-list">
          <div className="cart-product">
            <div className="row">
              <div className="col-2">
                <img src={image} alt="cart-product-image"/>
              </div>
              <div className="col-8">
                <div className="cart-product-info">
                  <div className="cart-product-title">Camisa Nike Corinthians II</div>
                  <div className="cart-product-style">GG | Branco com listras pretas</div>
                  <div className="cart-product-count">Quantidade: 1</div>
                </div>
              </div>
              <div className="col-2">
                <div className="cart-product-price">
                  R$ 149,00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;