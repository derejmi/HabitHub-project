import HabitContainer from '.';

describe('HabitContainer', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<HabitContainer />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });
});