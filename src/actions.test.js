import * as actions from './actions';

it('should return ADD_STORY action', () => {
  const action = actions.addStory('As a user...');

  expect(action).toEqual({
    type: 'ADD_STORY',
    story: 'As a user...'
  });
});

it('should return ADD_RULE action', () => {
  const action = actions.addRule('It should always...');

  expect(action).toEqual({
    type: 'ADD_RULE',
    rule: 'It should always...',
    id: 1
  });
});

it('should return ADD_EXAMPLE action', () => {
  const action = actions.addExample('The one where...', 1);

  expect(action).toEqual({
    type: 'ADD_EXAMPLE',
    example: 'The one where...',
    ruleId: 1
  });
});

it('should return ADD_QUESTION action', () => {
  const action = actions.addQuestion('Why?');

  expect(action).toEqual({
    type: 'ADD_QUESTION',
    question: 'Why?'
  });
});

