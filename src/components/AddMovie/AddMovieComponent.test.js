import AddMovieComponent from './AddMovieComponent';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const actImmediate = (wrapper) =>
    act(
        () =>
            new Promise((resolve) => {
                setImmediate(() => {
                    wrapper.update();
                    resolve();
                });
            })
    );


const fillField = (field, name, value) => {
    field.simulate('change', {
        persist: () => { },
        target: {
            name,
            value,
        },
    });
};


describe('AddMovieComponent', () => {
    configure({ adapter: new Adapter() });

    let component;
    const onSubmit = jest.fn();
    beforeEach(() => {
        component = mount(<AddMovieComponent onSubmit={onSubmit}></AddMovieComponent>);
    })

    test('Should render Add Movie Component', async () => {
        let buttonSubmit = component.find('.button-submit');
        expect(component.find('form').exists()).toBeTruthy();
        expect(buttonSubmit).toBeTruthy();
    });

    test('Should update the values', async () => {

        fillField(component.find({ name: 'title' }), 'title', 'movie');
        fillField(component.find({ name: 'release_date' }), 'release_date', '12/12/2019');
        fillField(component.find({ name: 'poster_path' }), 'poster_path', 'movie');
        fillField(component.find({ name: 'genres' }), 'genres', ['horror']);
        fillField(component.find({ name: 'overview' }), 'overview', 'hello');
        fillField(component.find({ name: 'runtime' }), 'runtime', '124');
        component.find('.button-submit').simulate('click');
        await actImmediate(component);
        expect(onSubmit).toHaveBeenCalled();
    })
})