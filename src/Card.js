import React, { Component, PropTypes } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <article className={'Card ' + this.props.type}>
        <header className="Card-header">
          <span className="author">f.l.</span>
          <a className="button" href="#">edit</a>
          <a className="button" href="#">delete</a>
        </header>

        <div className="Card-body">
          {this.props.value}
        </div>
      </article>
    );
  }
};

Card.propTypes = {
  type: PropTypes.oneOf(['rule', 'example', 'question']).isRequired,
  value: PropTypes.string.isRequired
};

export default Card;
