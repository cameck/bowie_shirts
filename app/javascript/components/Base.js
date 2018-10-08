import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Product from './Product';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleCartItemsChange = this.handleCartItemsChange.bind(this);
    this.state = {
      product: this.props.product,
      variations: this.props.variations,
      numItemsInCart: 0
    };
  }

  handleCartItemsChange(selectedVariation) {
    // TODO: Build Cart Model so we have a place to send our selectedVariation
    const numItems = this.state.numItemsInCart + 1;
    this.setState({
      numItemsInCart: numItems
    });
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
