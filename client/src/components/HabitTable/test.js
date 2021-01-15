import HabitTable from '.';

describe('HabitTable', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<HabitTable rowList={['ActivityOne', 'FreqOne', 'StreakOne']}/>);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('it creates new rows', () => {
        expect(component.find('tr').length).toBe(1);
    });
});