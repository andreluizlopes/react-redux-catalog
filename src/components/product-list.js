import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import image from '../assets/images/no-product-image.png';

class ProductList extends Component {

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

  getInstallments(price, installment, currency) {
    if (!installment) {
      return;
    }
    let parcel = price / installment;
    parcel = this.getPrice(parcel, currency);
    return (
      <span>Ou {installment}x {parcel}</span>
    );
  }

  getSizes(sizes) {
    const options = sizes.map( size =>
      <option key={`size-${size}`} value={size}>{size}</option>
    );
    return (
      <select name="product-size" ref="size" className="product-size">
        {options}
      </select>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const addProduct = {
      size: e.target.getElementsByClassName('product-size')[0].value,
      sku: e.target.getElementsByClassName('product-sku')[0].value,
      title: e.target.getElementsByClassName('product-title')[0].value,
      price: e.target.getElementsByClassName('product-price')[0].value,
      style: e.target.getElementsByClassName('product-style')[0].value
    }

    this.props.addToCart(addProduct);
    this.props.history.push("/cart");
  }

  buildProducts() {
    return this.props.products.map( product =>
      <div key={`product-${product.sku}`} className="col-4 col-6-sm">
        <div className="product">
            <img src={image} alt="" className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">
              {this.getPrice(product.price, product.currencyFormat)}
            </p>
            <p className="product-installments">
              {this.getInstallments(product.price, product.installments, product.currencyFormat)}
            </p>
            <div className="product-actions">
              <form action="" onSubmit={e => this.handleFormSubmit(e)}>
                <input type="hidden" className="product-sku" value={product.sku} />
                <input type="hidden" className="product-title" value={product.title} />
                <input type="hidden" className="product-price" value={product.price} />
                <input type="hidden" className="product-style" value={product.style} />
                <div className="label">
                  {this.getSizes(product.availableSizes)}
                </div>
                <div className="label">
                  <button
                    className="product-buy"
                  >
                    Comprar
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    );
  }

  render() {
    const productsList = this.buildProducts();
    return (
      <div className="product-list row">
        {productsList}
      </div>
    );
  }
}

export default withRouter(ProductList);
