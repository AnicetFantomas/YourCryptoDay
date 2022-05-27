import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../configuration';
import HomePage from '../HomePage';

describe('missions Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
