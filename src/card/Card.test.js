import React from 'react';
import { shallow } from 'enzyme';
import Card from 'card/Card';
import Examples from 'example/Examples';

describe('Card Component', () => {

  it('should render', () => {
    const component = shallow(
      <Card type="question" value="value" />
    );

    expect(component.find('.Card').length).toBe(1);
    expect(component.hasClass('question')).toBe(true);
    expect(component.find(Examples).length).toBe(0);
  });

  it('should have props', () => {
    const component = shallow(
      <Card type="example" value="The one where..." />
    );

    expect(component.instance().props.type).toBe('example');
    expect(component.instance().props.value).toBe('The one where...');
  });

  it.skip('should have an Examples component if it is a Rule Card', () => {
    const component = shallow(
      <Card type="rule" value="It must always..." />
    );

    expect(component.find(Examples).length).toBe(1);
  });
});
