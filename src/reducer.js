import * as actions from './actions';

export const initialState = {
  story: null,
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
    case actions.SET_STORY:
      return {
        ...state,
        story: action.story
      };

    case actions.ADD_RULE:
      return {
        ...state,
        rules: [...state.rules, action.rule]
      };

    case actions.ADD_EXAMPLE:
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

    case actions.ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question]
      };

    case actions.RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
