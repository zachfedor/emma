import React, { Component, PropTypes } from 'react';

class Card extends Component {
  render() {
    return (
      <article className={'Card ' + this.props.type}>
        {this.props.value}
      </article>
    );
  }
};

Card.propTypes = {
  type: PropTypes.oneOf(['rule', 'example', 'question']).isRequired,
  value: PropTypes.string.isRequired
};

export default Card;
