import React from 'react';
import { shallow, mount } from 'enzyme';
import AddStory from 'story/AddStory';

describe('<AddStory />', () => {

  it('should render without crashing', () => {
    const component = shallow(<AddStory />);

    expect(component).toBeDefined();
    expect(component.find('textarea').length).toBe(1);
    expect(component.find('button').length).toBe(1);
  });

  it('should handle submit event', () => {
    const spy = jest.fn();
    const component = mount(<AddStory handleSubmit={spy} />);

    // initial check
    expect(component.instance().props.handleSubmit).toBe(spy);
    expect(spy).not.toHaveBeenCalled();

    // call handleSubmit with empty textarea
    component.find('form').simulate('submit');
    expect(spy).not.toHaveBeenCalled();

    // add value to textarea
    const textarea = component.find('textarea');
    textarea.simulate('change', {target: {value: 'testing submit'}});

    // call handleSubmit
    component.find('form').simulate('submit');
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0]).toEqual(['testing submit']);
  });

});
