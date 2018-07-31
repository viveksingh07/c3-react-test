import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('renders the PearsonUsers component', () => {
    expect(app.find('Connect(PearsonUsers)').exists()).toBe(true);
  });
});
