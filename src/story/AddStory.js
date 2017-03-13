import React from 'react';
import 'story/AddStory.css';

const AddStory = (props) => {
  let value = '';

  const _handleSubmit = (event) => {
    event.preventDefault();

    if(value !== '') {
      props.handleSubmit(value);
    }
  };

  return (
    <form className="AddStory" onSubmit={_handleSubmit}>
      <label>
        Story
        <textarea
          autoFocus="true"
          onChange={e => value = e.target.value}
        />
      </label>

      <button type="submit">Start</button>
    </form>
  );
};

export default AddStory;

