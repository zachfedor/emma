import * as constants from 'app/constants';

export const initialState = {
  story: '',
  rules: [],
  examplesByRule: {},
  questions: []
};

const exampleByRule = (state = [], action) => {
  return [
    ...state,
    action.example
  ];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_STORY:
      return {
        ...state,
        story: action.story
      };

    case constants.ADD_RULE:
      return {
        ...state,
        rules: [...state.rules, action.rule]
      };

    case constants.ADD_EXAMPLE:
      const id = action.ruleId;
      const examplesByRule = Object.assign(
        {},
        state.examplesByRule,
        { [id]: exampleByRule(state.examplesByRule[id], action) }
      );

      return {
        ...state,
        examplesByRule
      };

    case constants.ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question]
      };

    case constants.RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
