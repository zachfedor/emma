import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddCard, { _AddCard } from './AddCard';
import reducer from '../app/reducer';

const store = createStore(reducer);

describe('AddCard', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

  it('should have props', () => {
    const component = mount(
      <Provider store={store}>
        <AddCard type="rule" />
      </Provider>
    );

    expect(component.exists()).toBe(true);
    expect(component.find('button').text()).toBe('add rule');
    expect(component.find('input').text()).toBe('');
  });

  it('should handle form submission', () => {
    const component = mount(
      <Provider store={store}>
        <AddCard type="rule" />
      </Provider>
    );

    // set the input and submit the form
    const input = component.find('input').first();
    const form = component.find('form').first();
    input.node.value = 'test';
    input.simulate('change', input);
    form.simulate('submit');

    // verify new state
    expect(store.getState().rules.length).toBe(1);
    expect(store.getState().rules[0]).toBe('test');
  });

});

describe('_AddCard', () => {

  it('should render without crashing', () => {
    const component = shallow(<_AddCard />);

    expect(component.exists()).toBe(true);
  });

  it('should have props', () => {
    const spy = jest.fn();
    const component = mount(
      <_AddCard type="example" handleSubmit={spy} />
    );

    // check type
    expect(component.instance().props.type).toBe('example');
    expect(component.find('button').text()).toBe('add example');

    // check handleSubmit
    expect(component.instance().props.handleSubmit).toBe(spy);
    expect(spy).not.toHaveBeenCalled();

    // call handleSubmit
    component.find('form').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

});

