import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('Header', () => {
    test('Should render Header', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        expect(div.textContent).toBe('React JS Global Mentoring Program');
    });

    test('Should match the snapshot', () => {
        const component = renderer.create(<Header />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
