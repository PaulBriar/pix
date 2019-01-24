import React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('App Component', () => {
    it('Should render App component', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});