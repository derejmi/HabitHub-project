import HabitTable from '.';

describe('HabitTable', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<HabitTable />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });
});