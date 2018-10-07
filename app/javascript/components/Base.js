import React from 'react';
import PropTypes from 'prop-types';
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
    return <p>{this.state.product.name}</p>;
  }
}
Base.propTypes = {
  product: PropTypes.object,
  variations: PropTypes.array
};
export default Base;
