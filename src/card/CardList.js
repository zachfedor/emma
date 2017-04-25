import React, { PropTypes } from 'react';
import Card from 'card/Card';
import AddCard from 'card/AddCard';
import 'card/CardList.css';

const CardList = ({ type, cards, examplesById }) => {
  const cardElements = !cards ? null :
    cards.map((card, index) => {
      return (
        <Card
          key={index}
          type={type}
          value={card}
        />
      );
    });

  return (
    <section className={ 'CardList ' + type }>
      <h2>{type}</h2>

      {cardElements}

      <AddCard type={type} />
    </section>
  );
};

CardList.propTypes = {
  type: PropTypes.oneOf(['rule', 'example', 'question']).isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  examplesById: PropTypes.object
}

export default CardList;
