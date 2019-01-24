import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('Should render the SearchBar component', () => {
        const component = shallow(<SearchBar/>);
        expect(component).toMatchSnapshot();
    });
});