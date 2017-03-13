import React, { Component, PropTypes } from 'react';
import 'card/Card.css';

class Card extends Component {
  render() {
    const CardBody = (props) => {
      if (props.inEditMode) {
        return (
          <textarea
            className="Card-body"
            defaultValue={props.text}
          />
        );
      } else {
        return (
          <div className="Card-body">
            {props.text}
          </div>
        );
      }
    };

    return (
      <article className={'Card ' + this.props.type}>
        <CardBody text={this.props.value} inEditMode={false} />

        <footer className="Card-footer">
          <span className="author">created by: ZF</span>
          <a className="button" href="#">edit</a>
          <a className="button" href="#">delete</a>
        </footer>
      </article>
    );
  }
};

Card.propTypes = {
  type: PropTypes.oneOf(['story', 'rule', 'example', 'question']).isRequired,
  value: PropTypes.string.isRequired
};

export default Card;
