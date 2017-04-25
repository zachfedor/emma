import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CardList from 'card/CardList';
import reducer from 'app/reducer';

const store = createStore(reducer);

describe('CardList', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CardList
          type="question"
          cards={[]}
        />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

  // it.skip('should have props', () => {
  //   const cards = ['one', 'two'];
  //   const examplesByRule = { 0: ['a', 'b'], 1: ['c'] };
  //   const component = shallow(
  //     <CardList
  //       type="rule"
  //       cards={cards}
  //       examplesByRule={examplesByRule}
  //     />
  //   );

  //   expect(component.instance().props.type).toBe('rule');
  //   expect(component.instance().props.cards).toEqual(cards);
  //   expect(component.instance().props.examplesByRule).toEqual(examplesByRule);
  // });

  // it.skip('should render child components', () => {
  //   const cards = ['one', 'two'];
  //   const examplesByRule = { 0: ['a', 'b'], 1: ['c'] };
  //   const component = mount(
  //     <Provider store={store}>
  //       <CardList
  //         type="rule"
  //         cards={cards}
  //         examplesByRule={examplesByRule}
  //       />
  //     </Provider>
  //   );

  //   expect(component.find('h2').text()).toBe('rule');
  //   expect(component.find('.Card').length).toBe(2);
  //   expect(component.find('.AddCard').length).toBe(1);
  // });

});
