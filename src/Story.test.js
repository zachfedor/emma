import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Story, { _Story } from './Story';
import reducer from './reducer';

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
    const component = shallow(<_Story />);

    expect(component.exists()).toBe(true);
  });

  it('should have props', () => {
    const spy = jest.fn();
    const component = shallow(<_Story story="Story" onSetStory={spy} />);

    expect(component.instance().props.story).toBeDefined();
    expect(component.instance().props.onSetStory).toBeDefined();
  });

  it('should handle onChange event', () => {
    const spy = jest.fn();
    const component = mount(<_Story story="Story" onSetStory={spy} />);
    const input = component.find('input');

    input.simulate('change');

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0]).toEqual(['Story']);
  });

});
