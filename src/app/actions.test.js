import * as actions from 'app/actions';
import * as constants from 'app/constants';

describe('Action Creators', () => {

  it('should return SET_STORY action', () => {
    const action = actions.setStory('As a user...');

    expect(action).toEqual({
      type: constants.SET_STORY,
      story: 'As a user...'
    });
  });

  it('should return ADD_QUESTION action', () => {
    const action = actions.addQuestion('Why?');

    expect(action).toEqual({
      type: constants.ADD_QUESTION,
      question: 'Why?'
    });
  });

  it('should return ADD_RULE action', () => {
    const action = actions.addRule('It should always...');

    expect(action).toEqual({
      type: constants.ADD_RULE,
      rule: 'It should always...',
      id: 1
    });
  });

  it('should return ADD_EXAMPLE action', () => {
    const action = actions.addExample('The one where...', 1);

    expect(action).toEqual({
      type: constants.ADD_EXAMPLE,
      example: 'The one where...',
      ruleId: 1
    });
  });

  it('should return RESET action', () => {
    const action = actions.reset();

    expect(action).toEqual({
      type: constants.RESET,
    });
  });

});

