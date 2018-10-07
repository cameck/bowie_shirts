import React from 'react';
import PropTypes from 'prop-types';

// TODO: Do this server side so the client isn't bogged down with it
//       Also break up all the individual components in this monster
const uniquePossibilities = (arr, value) => {
  return Array.from(new Set(arr.map(a => a[value])));
};

const mapVariationsObj = variations => {
  // Weed out everything out of stock
  const mappedVars = {};
  for (var i = 0; i < variations.length; i++) {
    console.log(variations);
    variations[i].color;
    if (variations[i].stock > 0) {
      if (!mappedVars[variations[i].color]) {
        mappedVars[variations[i].color] = [];
      }
      const isSelected = i === 0;
      mappedVars[variations[i].color].push(
        Object.assign({}, variations[i], { isSelected: isSelected })
      );
    }
  }
  return mappedVars;
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log('product: ', this.props.product);
    console.log('variations;', this.props.variations);
    const uniqueColors = uniquePossibilities(this.props.variations, 'color');
    const mappedVars = mapVariationsObj(this.props.variations);
    console.log('yolo: ', mappedVars);
    this.state = {
      selectedVariation: this.props.variations[0],
      possibleColors: uniqueColors,
      possibleSizes: uniquePossibilities(this.props.variations, 'size'),
      mappedVars: mappedVars
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
            <div className="container">
              <h1 className="title">{this.props.product.name} </h1>
              <div className="level">
                <div className="level-left">
                  {this.state.possibleColors.map((color, i) => {
                    return (
                      <div
                        className={
                          'level-item ' +
                          (this.state.selectedVariation.color === color
                            ? 'selected-item'
                            : '')
                        }
                        key={i}
                      >
                        {color}
                      </div>
                    );
                  })}
                  <div className="level-item">|</div>
                  <div className="level-right">
                    {this.state.mappedVars[
                      this.state.selectedVariation.color
                    ].map((variation, i) => {
                      return (
                        <div
                          className={
                            'level-item ' +
                            (this.state.selectedVariation.size ===
                            variation.size
                              ? 'selected-item'
                              : '')
                          }
                          key={i}
                        >
                          {' '}
                          {variation.size}{' '}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p>
                <strong>Details: </strong>
                {this.props.product.description}
              </p>{' '}
            </div>
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
