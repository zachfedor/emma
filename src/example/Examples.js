import { connect } from 'react-redux';
import CardList from 'card/CardList';

const mapStateToProps = (state, { ruleId }) => {
  const examples = state.examplesByRule[ruleId];
  const cards = examples ? examples : [];
  console.log(cards);

  return {
    type: 'example',
    cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Examples = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default Examples;

