import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Wrapper, { _Wrapper } from './Wrapper';
import { setStory } from './actions';
import reducer from './reducer';

const store = createStore(reducer);

describe('_Wrapper', () => {

  it('should render without crashing', () => {
    const component = shallow(<_Wrapper />);

    expect(component.exists()).toBe(true);
  });

  it('should conditionally render Rules and Questions', () => {
    const withoutStory = mount(
      <Provider store={store} >
        <_Wrapper hasStory={false} />
      </Provider>
    );

    expect(withoutStory.find('.CardList').length).toBe(0);

    const withStory = mount(
      <Provider store={store} >
        <_Wrapper hasStory={true} />
      </Provider>
    );

    expect(withStory.find('.CardList').length).toBe(2);
  });

});

describe('Wrapper', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store} >
        <Wrapper />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

  it('should conditionally render Rules and Questions', () => {
    const component = mount(
      <Provider store={store} >
        <Wrapper hasStory={false} />
      </Provider>
    );

    expect(component.find('.CardList').length).toBe(0);
    expect(store.getState().story).toBe('');

    store.dispatch(setStory('test'));

    expect(component.find('.CardList').length).toBe(2);
    expect(store.getState().story).toBe('test');
  });

});

