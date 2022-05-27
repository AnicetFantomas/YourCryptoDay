import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../configuration';
import ShowDetails from '../ShowDetails';

describe('missions Component test', () => {
  it('Renders Mission Row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <ShowDetails />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});