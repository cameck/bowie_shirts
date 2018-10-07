import React from 'react';
import PropTypes from 'prop-types';
class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log('product: ', this.props.product);
    console.log('variations;', this.props.variations);
    this.state = {
      selectedVariation: this.props.variations[0]
    };
    console.log(this.state);
  }
  render() {
    return (
      <div className="product-hero">
        <section className="hero is-large">
          <div>
            <div className="container has-text-centered">
              <figure className="image is-656x656">
                <img
                  src={this.state.selectedVariation.image}
                  alt={`${this.props.product.name} image`}
                />
              </figure>
            </div>
            <h1 className="title">{this.props.product.name} </h1>
          </div>
        </section>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  variations: PropTypes.array,
  onCartChange: PropTypes.func
};
export default Product;
