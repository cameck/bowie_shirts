import React from 'react';
import PropTypes from 'prop-types';
import {
  uniquePossibilities,
  mapVariationsObj,
  findSelection
} from '../utils/productUtilities';

// TODO: Break up all the individual components in this monster
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariation: this.props.variations[0],
      possibleColors: uniquePossibilities(this.props.variations, 'color'),
      mappedVars: mapVariationsObj(this.props.variations)
    };
  }

  handleVariationChange(item, e) {
    e.preventDefault();

    const isColor = this.state.possibleColors.includes(item);

    this.setState({
      selectedVariation: findSelection(
        this.props.variations,
        this.state.selectedVariation,
        isColor,
        item
      )
    });
  }

  handleAddToCart(selectedVariation, e) {
    e.preventDefault();
    this.props.onCartChange(selectedVariation);
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
            <div className="container description-holder">
              <h1 className="title">{this.props.product.name} </h1>
              <h2 className="subtitle">${this.props.product.price}</h2>
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
                        <a
                          className="button is-text"
                          onClick={e => this.handleVariationChange(color, e)}
                        >
                          {color}
                        </a>
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
                          <a
                            className="button is-text"
                            onClick={e =>
                              this.handleVariationChange(variation.size, e)
                            }
                          >
                            {variation.size}
                          </a>{' '}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="level-right">
                  <button
                    className="button is-link"
                    onClick={e =>
                      this.handleAddToCart(this.state.selectedVariation, e)
                    }
                  >
                    Add To Bag
                  </button>
                </div>
              </div>
              <div className="content">
                <p>
                  <strong>Details: </strong>
                  {this.props.product.description}
                </p>{' '}
                <p>
                  <strong>Our Promise: </strong>
                  We 100% certify the fact that all products were produced while
                  jamming out to David Bowie 👨‍🎤 .
                </p>{' '}
              </div>
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
