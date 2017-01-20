import React from 'react';
import { connect } from 'react-redux';
import { setStory } from './actions';

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


export const _Story = ({ story, onSetStory }) => {
  const _onChange = (event) => {
    event.preventDefault();
    onSetStory(event.target.value);
  };

  return (
    <input
      placeholder="What's your user story?"
      onChange={_onChange}
      value={story}
    />
  );
};

const Story = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Story);

export default Story;
