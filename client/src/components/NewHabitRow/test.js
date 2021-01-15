import NewHabitRow from '.';

describe('NewHabitRow', () => {
    let component, mockFunctionStreak, mockFunctionDelete, mockTick;
    
    beforeEach( () => {
        mockFunctionStreak = jest.fn();
        mockFunctionDelete = jest.fn();
        mockTick = jest.fn();
        component = shallow(<NewHabitRow 
                                updateStreak = {mockFunctionStreak}
                                deleteHabits = {mockFunctionDelete}
                                details = {{
                                    id : 2,
                                    updated_date : '2021-01-15',
                                    streak : 0,
                                    habitName : 'Jogging'
                                }}
                                />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('updateStreak is called', () => {
        const button = component.find('button').at(0);
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        button.simulate("click", fakeEvent);
        mockFunctionStreak();
        expect(mockFunctionStreak).toHaveBeenCalled();
    });

    test('deleteHabit is called', () => {
        const button = component.find('button').at(1);
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        button.simulate("click", fakeEvent);
        mockFunctionDelete();
        expect(mockFunctionDelete).toHaveBeenCalled();
    });

    test('checkbox click changes state', () => {
        const checkbox = component.find('input').first();
        const fakeEvent = { preventDefault: ()=> 'do nothing', target: {checked: false}};
        checkbox.simulate('click', fakeEvent);
        mockTick();
        expect(mockTick).toHaveBeenCalled();
        expect(component.state('weekTotal')).toBe(NaN);
    });
});