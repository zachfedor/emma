import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddCard, { _AddCard } from 'card/AddCard';
import reducer from 'app/reducer';

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
    expect(component.find('textarea').text()).toBe('');
  });

  it('should handle form submission', () => {
    const component = mount(
      <Provider store={store}>
        <AddCard type="rule" />
      </Provider>
    );

    // set the input and submit the form
    const input = component.find('textarea').first();
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

    // check type prop
    expect(component.instance().props.type).toBe('example');

    // check handleSubmit prop
    expect(component.instance().props.handleSubmit).toBe(spy);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render a rule', () => {
    const component = shallow(<_AddCard type="rule"/>);

    expect(component.find('textarea').length).toBe(1);
    expect(component.find('button').text()).toBe('add rule');
  });

  it('should render an example', () => {
    const component = shallow(<_AddCard type="example"/>);

    expect(component.find('textarea').length).toBe(1);
    expect(component.find('button').text()).toBe('add example');
  });

  it('should render a question', () => {
    const component = shallow(<_AddCard type="question"/>);

    expect(component.find('textarea').length).toBe(1);
    expect(component.find('button').text()).toBe('add question');
  });

  it('should render a story', () => {
    const component = shallow(<_AddCard type="story"/>);

    expect(component.find('textarea').length).toBe(1);
    expect(component.find('button').text()).toBe('start mapping');
  });

  it('should call submit function', () => {
    const spy = jest.fn();
    const component = mount(
      <_AddCard type="example" handleSubmit={spy} />
    );

    // initial check
    expect(component.instance().props.handleSubmit).toBe(spy);
    expect(spy).not.toHaveBeenCalled();

    // call handleSubmit with empty string
    component.find('form').simulate('submit');
    expect(spy).not.toHaveBeenCalled();

    // add value to textarea
    const input = component.find('textarea');
    input.first().simulate('change', {target: {value: 'test'}});

    // call handleSubmit
    component.find('form').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

});

