import React from 'react';
import PropTypes from 'prop-types';

// TODO: Do this server side so the client isn't bogged down with it
// TODO: Break up all the individual components in this monster
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

const findSelection = (allVariations, selectedVariation, isColor, item) => {
  return allVariations.find(variation => {
    if (isColor) {
      return (
        variation.color === item && selectedVariation.size === variation.size
      );
    } else {
      return (
        variation.color === selectedVariation.color && variation.size === item
      );
    }
  });
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariation: this.props.variations[0],
      possibleColors: uniquePossibilities(this.props.variations, 'color'),
      mappedVars: mapVariationsObj(this.props.variations)
    };
    console.log(this.state);
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
                  <button className="button is-link">Add To Bag</button>
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
