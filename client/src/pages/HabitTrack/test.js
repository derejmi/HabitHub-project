import HabitTrack from '.';

describe('HabitTrack', () => {
    let component, logOutMock;
    
    beforeEach( () => {
        logOutMock = jest.fn();
        component = shallow(<HabitTrack.WrappedComponent history={[]}/>);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('check button click', () => {
        const button = component.find('Button').first();
        const fakeEvent = { preventDefault: ()=> 'do nothing', target: {}};
        button.simulate('click', fakeEvent);
        logOutMock();
        expect(logOutMock).toHaveBeenCalled();
    });
});