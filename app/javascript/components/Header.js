import React from 'react';
import PropTypes from 'prop-types';
class Header extends React.Component {
  render() {
    return (
      <nav className="level header">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">⚡️ Bowie Shirts ⚡ ️</p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            {/* TODO: Pull this into seperate component and build actual list of
            what is in the cart */}
            <span className="fa-stack">
              <span className="fa fa-shopping-cart fa-stack-2x" />
              <strong className="fa-stack-1x shopping-cart-text">
                {this.props.numItemsInCart || ''}
              </strong>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  numItemsInCart: PropTypes.node
};
export default Header;
