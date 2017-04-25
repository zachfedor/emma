import {
  CARD_TYPES,
  SET_STORY,
  ADD_QUESTION,
  ADD_RULE,
  ADD_EXAMPLE,
  RESET,
} from 'app/constants';


describe('Constants', () => {
  it('should define CARD_TYPES', () => {
    expect(CARD_TYPES)
      .toEqual(['story', 'question', 'rule', 'example']);
  });

  it('should define SET_STORY', () => {
    expect(SET_STORY).toBe('SET_STORY');
  });

  it('should define ADD_QUESTION', () => {
    expect(ADD_QUESTION).toBe('ADD_QUESTION');
  });

  it('should define ADD_RULE', () => {
    expect(ADD_RULE).toBe('ADD_RULE');
  });

  it('should define ADD_EXAMPLE', () => {
    expect(ADD_EXAMPLE).toBe('ADD_EXAMPLE');
  });

  it('should define RESET', () => {
    expect(RESET).toBe('RESET');
  });
});
