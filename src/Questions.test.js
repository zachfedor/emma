import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Questions from './Questions';
import reducer from './reducer';

const store = createStore(reducer);

describe('Questions', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Questions />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

});

