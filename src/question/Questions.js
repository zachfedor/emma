import { connect } from 'react-redux';
import CardList from 'card/CardList';

const mapStateToProps = (state) => {
  return {
    type: 'question',
    cards: state.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default Questions;

