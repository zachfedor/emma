import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addRule, addQuestion, addExample, setStory } from 'app/actions';
import { CARD_TYPES } from 'app/constants';
import 'card/AddCard.css';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let addFunction;
  switch (ownProps.type) {
    case 'story':
      addFunction = setStory;
      break;
    case 'question':
      addFunction = addQuestion;
      break;
    case 'rule':
      addFunction = addRule;
      break;
    case 'example':
      addFunction = addExample;
      break;
    default:
      addFunction = () => null;
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

export const _AddCard = ({ type, handleSubmit }) => {
  let autofocus = false;
  let buttonText = '';
  let input;
  let value = '';

  if(type === 'story') {
    autofocus = true;
    buttonText = 'start mapping';
  } else {
    buttonText = `add ${type}`;
  }

  const _handleSubmit = (event) => {
    event.preventDefault();

    if(value !== '') {
      handleSubmit(value);
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
      className={`AddCard ${type}`}
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

_AddCard.propTypes = {
  type: PropTypes.oneOf(CARD_TYPES).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AddCard);

export default AddCard;

