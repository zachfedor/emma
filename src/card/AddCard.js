import React from 'react';
import { connect } from 'react-redux';
import { addRule, addQuestion, addExample } from '../app/actions';
import './AddCard.css';

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
  let value = '';

  const _handleSubmit = (event) => {
    event.preventDefault();

    if(value !== '') {
      props.handleSubmit(value);
      // TODO: figure out a way to find the input without using a ref
      input.value = '';
      input.focus();
    }
  }
  const _handleChange = (event) => {
    value = event.target.value;
  }

  return (
    <form className="AddCard" onSubmit={_handleSubmit}>
      <textarea ref={node => { input = node; }} onChange={_handleChange}/>

      <button type="submit">add {props.type}</button>
    </form>
  );
};

const AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddCard);

export default AddCard;

