import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Examples from 'example/Examples';
import Card from 'card/Card';
import CardList from 'card/CardList';
import AddCard from 'card/AddCard';
import reducer from 'app/reducer';
import mockStore from 'app/mockStore';

describe('Examples', () => {
  // TODO: replace real store with this mockStore in all tests
  // TODO: rules don't have ids yet, so examplesByRule[undefined] is happening
  // all over the place. either go by index (bad), nest the examples in the
  // rule object (better), or start IDing rules/questions/examples (best)
  const store = mockStore({
    examplesByRule: {
      1: [
        { type: 'example', value: 'one', },
        { type: 'example', value: 'two', },
      ],
    }
  });

  it('should render with cards', () => {
    const component = mount(
      <Provider store={store} >
        <Examples ruleId={1} />
      </Provider>
    );

    expect(component.exists()).toBe(true);
    expect(component.find(CardList).length).toBe(1);
    expect(component.find(Card).length).toBe(2);
    expect(component.find(AddCard).length).toBe(1);
  });

  it('should render without cards', () => {
    const component = mount(
      <Provider store={store}>
        <Examples ruleId={1341234} />
      </Provider>
    );

    expect(component).toBeDefined();
    expect(component.find(CardList).length).toBe(1);
    expect(component.find(Card).length).toBe(0);
    expect(component.find(AddCard).length).toBe(1);
  });

});

