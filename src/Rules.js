import { connect } from 'react-redux';
import CardList from './CardList';

const mapStateToProps = (state) => {
  return {
    type: 'rule',
    cards: state.rules,
    examplesByRule: state.examplesByRule
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Rules = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default Rules;

