import React from 'react';
import { connect } from 'react-redux';
import { addRule, addQuestion, addExample, setStory } from 'app/actions';
import 'card/AddCard.css';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let addFunction;
  switch (ownProps.type) {
    case 'rule':
      addFunction = addRule;
      break;
    case 'question':
      addFunction = addQuestion;
      break;
    case 'example':
      addFunction = addExample;
      break;
    case 'story':
    default:
      addFunction = setStory;
  }

  return {
    handleSubmit: (value) => {
      const action = !ownProps.id
        ? addFunction(value)
        : addFunction(value, ownProps.id);
      dispatch(action);
    }
  };
};

export const _AddCard = (props) => {
  let input, buttonText;
  let value = '';
  let autofocus = false;

  switch (props.type) {
    case 'rule':
      buttonText = 'add rule';
      break;
    case 'question':
      buttonText = 'add question';
      break;
    case 'example':
      buttonText = 'add example';
      break;
    case 'story':
    default:
      autofocus = true;
      buttonText = 'start mapping';
  }

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
    <form
      className={`AddCard ${props.type}`}
      onSubmit={_handleSubmit}
    >
      <textarea
        placeholder="As a user, I want to..."
        autoFocus={autofocus}
        onChange={_handleChange}
        ref={node => { input = node; }}
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
};

const AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddCard);

export default AddCard;

