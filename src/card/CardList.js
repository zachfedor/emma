import React, { Component, PropTypes } from 'react';
import Card from 'card/Card';
import AddCard from 'card/AddCard';
import 'card/CardList.css';

class CardList extends Component {
  render() {
    const cardElements = !this.props.cards ? null :
      this.props.cards.map((card, index) => {
        return (
          <Card
            type={this.props.type}
            value={card}
            key={index}
          />
        );
      });

    return (
      <section className={ 'CardList ' + this.props.type }>
        <h2>{this.props.type}</h2>

        {cardElements}

        <AddCard type={this.props.type} />
      </section>
    );
  }
};

CardList.propTypes = {
  type: PropTypes.oneOf(['rule', 'example', 'question']).isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  examplesById: PropTypes.object
}

export default CardList;
