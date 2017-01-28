import React from 'react';
import { connect } from 'react-redux';
import { setStory } from './actions';
import './Story.css';

const mapStateToProps = (state) => {
  return {
    story: state.story
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetStory: (story) => {
      dispatch(setStory(story));
    }
  };
};


let id = 0;

export const _Story = ({ story, onSetStory }) => {
  const _onChange = (event) => {
    event.preventDefault();
    onSetStory(event.target.value);
  };
  const componentId = "story-input-" + id++;

  return (
    <form className="Story">
      <label htmlFor={componentId}>What's your user story?</label>
      <input
        id={componentId}
        onChange={_onChange}
        value={story}
      />
    </form>
  );
};

const Story = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Story);

export default Story;
