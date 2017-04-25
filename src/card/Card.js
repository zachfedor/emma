import React, { PropTypes } from 'react';
import Examples from 'example/Examples';
import 'card/Card.css';

const Card = ({ type, value }) => {
  const CardBody = ({ text, inEditMode }) => {
    if (inEditMode) {
      return (
        <textarea
          className="Card-body"
          defaultValue={text}
        />
      );
    } else {
      return (
        <div className="Card-body">
          {text}
        </div>
      );
    }
  };

  return (
    <article className={'Card ' + type}>
      <CardBody text={value} inEditMode={false} />

      {type === 'rule' && <Examples />}

      {false && (
        <footer className="Card-footer">
          <span className="author">created by: ZF</span>
          <a className="button" href="#">edit</a>
          <a className="button" href="#">delete</a>
        </footer>
      )}
    </article>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['story', 'rule', 'example', 'question']).isRequired,
  value: PropTypes.string.isRequired
};

export default Card;
