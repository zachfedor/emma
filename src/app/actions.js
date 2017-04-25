import {
  SET_STORY,
  ADD_QUESTION,
  ADD_RULE,
  ADD_EXAMPLE,
  RESET,
} from 'app/constants';

// Action Creators
export const setStory = (story) => {
  return {
    type: SET_STORY,
    story
  };
};

let nextRuleId = 1;
export const addRule = (rule) => {
  return {
    type: ADD_RULE,
    rule,
    id: nextRuleId++
  };
};

export const addExample = (example, ruleId) => {
  return {
    type: ADD_EXAMPLE,
    example,
    ruleId
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

