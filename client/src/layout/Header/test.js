import Header from '.';

describe('Header', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<Header />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('number of p elements', () => {
        const pElement = component.find('p');
        expect(pElement).toHaveLength(1);
    });
});