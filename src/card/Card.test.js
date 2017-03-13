import React from 'react';
import { shallow } from 'enzyme';
import Card from 'card/Card';

describe('Card Component', () => {

  it('should render', () => {
    const component = shallow(
      <Card type="rule" value="value" />
    );

    expect(component.find('.Card').length).toBe(1);
    expect(component.hasClass('rule')).toBe(true);
  });

  it('should have props', () => {
    const component = shallow(
      <Card type="example" value="The one where..." />
    );

    expect(component.instance().props.type).toBe('example');
    expect(component.instance().props.value).toBe('The one where...');
  });

});
