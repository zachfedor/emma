import React, { Component, PropTypes } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const cardElements = !this.props.cards ? null :
      this.props.cards.map(card => {
        return (
          <Card value={card} type={this.props.type} />
        );
      });

    return (
      <section className="CardList">
        <h2>{this.props.type}</h2>

        {cardElements}
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
