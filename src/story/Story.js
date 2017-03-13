import React from 'react';
import { connect } from 'react-redux';
import { setStory } from 'app/actions';
import AddCard from 'card/AddCard';
import Card from 'card/Card';
import 'story/Story.css';

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

export const _Story = (props) => {
  const optionalElement = (story, onSetStory) => {
    if(story !== '') {
      return (
        <Card type="story" value={story} />
      );
    } else {
      return (
        <AddCard type="story" handleSubmit={onSetStory} />
      );
    }
  };

  return (
    <section className="Story">
      {optionalElement(props.story, props.onSetStory)}
    </section>
  );
};

const Story = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Story);

export default Story;
