import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Rules from 'rule/Rules';
import reducer from 'app/reducer';

const store = createStore(reducer);

describe('Rules', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Rules />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

});

