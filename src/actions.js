// Actions
export const ADD_STORY    = 'ADD_STORY';
export const ADD_RULE     = 'ADD_RULE';
export const ADD_EXAMPLE  = 'ADD_EXAMPLE';
export const ADD_QUESTION = 'ADD_QUESTION';

// Action Creators
export const addStory = (story) => {
  return {
    type: ADD_STORY,
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
