import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Header', () => {
    test('Should render Header', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        expect(div.textContent).toBe('React JS Global Mentoring Program');
    });
});
