import { connect } from 'react-redux';
import CardList from 'card/CardList';

const mapStateToProps = (state) => {
  return {
    type: 'rule',
    cards: state.rules
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

