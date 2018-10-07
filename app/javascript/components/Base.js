import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
class Base extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.product);
    console.log(this.props.variations);
    this.state = {
      product: this.props.product,
      numItemsInCart: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header numItemsInCart={this.state.numItemsInCart} />
        <section className="section">
          <p>{this.state.product.name}</p>
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
