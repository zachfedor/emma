import React from 'react';
import { connect } from 'react-redux';
import Story from '../story/Story';
import Rules from '../rule/Rules';
import Questions from '../question/Questions';
import './Wrapper.css';

const mapStateToProps = (state) => {
  return {
    hasStory: (state.story !== '')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const _Wrapper = ({ hasStory }) => {
  return (
    <main className="Wrapper">
      <Story />

      {hasStory &&
        <Rules />
      }

      {hasStory &&
        <Questions />
      }
    </main>
  );
};

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Wrapper);

export default Wrapper;
