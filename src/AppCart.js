import React, { Component } from 'react';

import Catalog from './components/catalog';
import Cart from './components/cart';

class AppCart extends Component {
  render() {
    return (
      <div className="AppCart">
        <Cart />
        <Catalog />
      </div>
    );
  }
}

export default AppCart;
