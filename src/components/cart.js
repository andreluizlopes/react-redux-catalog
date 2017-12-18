import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bagIcon from '../assets/images/bag.svg';
import image from '../assets/images/no-product-image-thumb.png';
import { removeToCart } from '../actions';
import { v4 } from 'node-uuid';

class Cart extends Component {

  buildCartProducts(products) {
    if (!this.props.products || !this.props.products.length) {
      return (
        <div className="row">
          <div className="col-12">
            <div className="empty-cart">Empty cart</div>
          </div>
        </div>
      );
    }
    return products.map( product =>
      <div key={`cart-product-${v4()}`} className="cart-product">
        <div className="row">
          <button className="cart-product-remove" onClick={() => this.props.removeToCart({sku: product.sku, size: product.size})}>
            <i className="close-icon" />
          </button>
          <div className="col-2 col-2-sm">
            <img src={image} alt="cart-product"/>
          </div>
          <div className="col-8 col-8-sm">
            <div className="cart-product-info">
              <div className="cart-product-title">{product.title}</div>
              <div className="cart-product-style">{product.size} | {product.style}</div>
              <div className="cart-product-count">Quantidade: {product.total}</div>
            </div>
          </div>
          <div className="col-2 col-2-sm">
            <div className="cart-product-price">
              {this.getPrice(product.price)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  getCartTotal(products) {
    let totalItems = 0;
    if (products) {
      products.map( product =>
        totalItems += product.total
      );
    }

    return totalItems || "";
  }

  getTotalPrice(products) {
    let totalPrice = 0;
    if (products) {
      products.map( product =>
        totalPrice += (product.price * product.total)
      );
    }

    return totalPrice;
  }

  getPrice(price, currency = "R$") {
    const numberFixed = 2;
    const normalizePrice = Number(price).toFixed(numberFixed).replace(".", ",").split(",");
    const price1 = (<strong>{normalizePrice[0]}</strong>);
    const price2 = normalizePrice[1];
    return (
      <span>
        {currency} <strong>{price1}</strong>,{price2}
      </span>
    );
  }

  render() {
    return (
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-info">
            <img className="cart-bag-icon" src={bagIcon} alt="Cart" />
            <div className="cart-total">{this.getCartTotal(this.props.products)}</div>
          </div>
            <span className="cart-title">SACOLA</span>
        </div>

        <div className="cart-list">
          {this.buildCartProducts(this.props.products)}
        </div>

        <div className="cart-summary">
          <div className="row">
            <div className="col-6 col-6-sm">
              <p className="cart-summary-title">Subtotal</p>
            </div>
            <div className="col-6 col-6-sm">
              <p className="cart-summary-price">{this.getPrice(this.getTotalPrice(this.props.products))}</p>
              <p className="cart-summary-installments">OU EM ATÉ 10 X {this.getPrice(this.getTotalPrice(this.props.products) / 10)}</p>
            </div>
            <div className="col-12">
              <Link className="cart-summary-button-buy" to="/">Comprar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.updateCart.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (addProduct) => dispatch(removeToCart(addProduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
