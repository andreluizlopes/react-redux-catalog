import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductList from './product-list';

class Catalog extends Component {

  render() {
    return (
      <div className="Catalog container">
        <ProductList
          products={this.props.products}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getProducts.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (addProduct) => dispatch(addToCart(addProduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);