import SignUp from '.';

describe('SignUp', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<SignUp />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('it contains a jumbotron and a form', () => {
        const jumbotron = component.find('Jumbotron');
        const form = component.find('Form');
        expect(jumbotron).toExist;
        expect(form).toExist;
    });
});