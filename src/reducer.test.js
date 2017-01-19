import reducer, { initialState } from './reducer';
import * as actions from './actions';

describe('Reducer', () => {

  it('should create initial state', () => {
    const newState = reducer(undefined, { type: 'default' });

    expect(newState).toEqual({
      story: null,
      rules: [],
      examplesByRule: {},
      questions: []
    });
    expect(newState).toEqual(initialState);

  });

  it('should set the story', () => {
    const stateOne = reducer(initialState, actions.setStory('As a user...'));

    expect(stateOne).toEqual({
      story: 'As a user...',
      rules: [],
      examplesByRule: {},
      questions: []
    });

    const stateTwo = reducer(stateOne, actions.setStory('edited story'));

    expect(stateTwo.story).toEqual('edited story');
  });

  it('should add a rule', () => {
    const stateOne = reducer(initialState, actions.addRule('rule one'));

    expect(stateOne).toEqual({
      story: null,
      rules: ['rule one'],
      examplesByRule: {},
      questions: []
    });

    const stateTwo = reducer(stateOne, actions.addRule('rule two'));

    expect(stateTwo.rules.length).toEqual(2);
  });

  it('should add an example to new rule', () => {
    const action = actions.addExample('The one where...', 1);
    const stateOne = reducer(initialState, action);

    expect(stateOne).toEqual({
      story: null,
      rules: [],
      examplesByRule: { 1: ['The one where...'] },
      questions: []
    });
  });

  it('should add an example to existing rule', () => {
    const action = actions.addExample('example two', 1);
    const oldState = Object.assign(
      {},
      initialState,
      {examplesByRule: {1: ['example one']}}
    );
    const newState = reducer(oldState, action);

    expect(newState.examplesByRule).toEqual({
      1: ['example one', 'example two']
    });
  });

  it('should add a question', () => {
    const action = actions.addQuestion('What happens when..?');
    const stateOne = reducer(initialState, action);

    expect(stateOne).toEqual({
      story: null,
      rules: [],
      examplesByRule: {},
      questions: [ 'What happens when..?' ]
    });

    const stateTwo = reducer(stateOne, action);

    expect(stateTwo.questions.length).toEqual(2);
  });

  it('should reset to initial state', () => {
    const oldState = {
      story: 'As a user...',
      rules: ['r one', 'r two'],
      examplesByRule: {
        1: ['e one', 'e two'],
        2: ['e three']
      },
      questions: ['q one', 'q two']
    };
    const newState = reducer(oldState, actions.reset());

    expect(newState).toEqual(initialState);
  });

});

