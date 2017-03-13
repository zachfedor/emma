import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Story, { _Story } from 'story/Story';
import AddCard from 'card/AddCard';
import Card from 'card/Card';
import reducer from 'app/reducer';

const store = createStore(reducer);

describe('Story', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Story />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

});


describe('_Story', () => {

  it('should render without crashing', () => {
    const component = shallow(<_Story story="story"/>);

    expect(component.exists()).toBe(true);
    expect(component.find('section').length).toBe(1);
  });

  it('should have props', () => {
    const spy = jest.fn();
    const component = shallow(<_Story story="story" onSetStory={spy} />);

    expect(component.instance().props.story).toBeDefined();
    expect(component.instance().props.onSetStory).toBeDefined();
  });

  it('should render a Card component', () => {
    const spy = jest.fn();
    const component = mount(<_Story story="story" onSetStory={spy} />);

    expect(component.find(Card).length).toBe(1);
  });

  it('should render an AddCard component', () => {
    const spy = jest.fn();
    const component = mount(
      <Provider store={store}>
        <_Story story="" onSetStory={spy} />
      </Provider>
    );

    expect(component.find(AddCard).length).toBe(1);
  });

});
