import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

describe('CardList', () => {

  it('should render without crashing', () => {
    const component = shallow(<CardList />);

    expect(component.exists()).toBe(true);
  });

  it('should have props', () => {
    const cards = ['one', 'two'];
    const examplesByRule = { 0: ['a', 'b'], 1: ['c'] };
    const component = shallow(
      <CardList
        type="rule"
        cards={cards}
        examplesByRule={examplesByRule}
      />
    );

    expect(component.instance().props.type).toBe('rule');
    expect(component.instance().props.cards).toEqual(cards);
    expect(component.instance().props.examplesByRule).toEqual(examplesByRule);
  });

  it('should render child components', () => {
    const cards = ['one', 'two'];
    const examplesByRule = { 0: ['a', 'b'], 1: ['c'] };
    const component = mount(
      <CardList
        type="rule"
        cards={cards}
        examplesByRule={examplesByRule}
      />
    );

    expect(component.find('h2').text()).toBe('rule');
    expect(component.find('.Card').length).toBe(2);
  });

});
