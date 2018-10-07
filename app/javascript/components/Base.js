import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Product from './Product';

class Base extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.product);
    console.log(this.props.variations);
    this.state = {
      product: this.props.product,
      variations: this.props.variations,
      numItemsInCart: 0
    };
  }

  handleCartItemsChange(number) {
    this.setState({ numItemsInCart: number });
  }

  render() {
    return (
      <React.Fragment>
        <Header numItemsInCart={this.state.numItemsInCart} />
        <section>
          <Product
            product={this.state.product}
            variations={this.state.variations}
            onCartChange={this.handleCartItemsChange}
          />
        </section>
      </React.Fragment>
    );
  }
}
Base.propTypes = {
  product: PropTypes.object,
  variations: PropTypes.array
};
export default Base;
