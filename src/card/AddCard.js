import React from 'react';
import { connect } from 'react-redux';
import { addRule, addQuestion, addExample } from '../app/actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let add;
  switch (ownProps.type) {
    case 'rule':
      add = addRule;
      break;
    case 'question':
      add = addQuestion;
      break;
    case 'example':
    default:
      add = addExample;
  }

  return {
    handleSubmit: (value) => {
      const action = !ownProps.id ? add(value) : add(value, ownProps.id);
      dispatch(action);
    }
  };
};

export const _AddCard = (props) => {
  let input;
  const _handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(input.value);
    input.value = '';
  }

  return (
    <form className="AddCard" onSubmit={_handleSubmit}>
      <input ref={node => { input = node; }} />

      <button type="submit">add {props.type}</button>
    </form>
  );
};

const AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddCard);

export default AddCard;

