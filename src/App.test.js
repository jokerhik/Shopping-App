// __tests__/Intro-test.js
import React from 'react';
import Form from './components/Form';

test('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
});
