import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './product-list';

class Catalog extends Component {
  render() {
    return (
      <div className="Catalog container">
        <ProductList
          products={this.props.products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts
  };
};

export default connect(mapStateToProps)(Catalog);
