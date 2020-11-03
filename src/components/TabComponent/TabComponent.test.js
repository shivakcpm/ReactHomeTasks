import TabComponent from './TabComponent';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TABS} from '../../consts/constants';

describe('Tab Component', () => {
    configure({ adapter: new Adapter() });
    test('Should render Tabs', () => {   
        const component = shallow(<TabComponent tabs={TABS}></TabComponent>);
        expect(component.find('.tab-container').find('.tab').length).toEqual(TABS.length);
    });

    test('Should match the snapshot', () => {
        const component = renderer.create(<TabComponent tabs={TABS} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
