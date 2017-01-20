import { connect } from 'react-redux';
import CardList from './CardList';

const mapStateToProps = (state, { ruleId }) => {
  return {
    type: 'example',
    cards: state.examplesByRule[ruleId]
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

