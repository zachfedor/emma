import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Examples from 'example/Examples';
import reducer from 'app/reducer';

const store = createStore(reducer);

describe('Examples', () => {

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Examples ruleId={1} />
      </Provider>
    );

    expect(component.exists()).toBe(true);
  });

});

