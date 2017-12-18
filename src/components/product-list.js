import React, { Component } from 'react';
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

  buildProducts() {
    return this.props.products.products.map( product =>
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

export default ProductList;