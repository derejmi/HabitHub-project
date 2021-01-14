import { Component } from 'react';
import LoggedOutRoute from '.';

describe('LoggedOut', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<LoggedOutRoute isLoggedIn={true} component={Component}/>);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    // test('the redirect has the correct path', () => {
    //     const path = component.find('Redirect');
    //     console.log(path)
    //     expect(path.prop('to')).toEqual('/habitTrack');
    // });
});