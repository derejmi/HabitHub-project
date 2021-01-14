import NewHabitRow from '.';

describe('NewHabitRow', () => {
    let component, mockFunctionStreak, mockFunctionDelete;
    
    beforeEach( () => {
        mockFunctionStreak = jest.fn()
        mockFunctionDelete = jest.fn()
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

    test('updateStreak changes streak', () => {
        const button = component.find('button').at(0);
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        button.simulate("click", fakeEvent);
        mockFunctionStreak();
        expect(mockFunctionStreak).toHaveBeenCalled();
        expect(component.state('weekTotal')).toBe(0);
    });

    test('deleteHabit is called', () => {
        const button = component.find('button').at(1);
        const fakeEvent = { preventDefault: () => "do nothing", target: {} };
        button.simulate("click", fakeEvent);
        mockFunctionDelete();
        expect(mockFunctionDelete).toHaveBeenCalled();
    });
});