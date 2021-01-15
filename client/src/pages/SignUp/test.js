import SignUp from '.';
import Form from "react-bootstrap/Form";

describe('SignUp', () => {
    let component, signupMock;
    
    beforeEach( () => {
        signupMock = jest.fn();
        component = shallow(<SignUp history={[]}/>);
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

    // test('it has a state', () => {
    //     const instance = component.instance()
    //     expect(instance['state']).toEqual({
    //         username: "",
    //         email: "",
    //         password: "",
    //         password2: ""
    //     });
    // });

    // test('check signup', () => {
    //     const form = component.find('Form');
    //     const fakeEvent = { preventDefault: () => "do nothing" };
    //     form.simulate("submit", fakeEvent);        
    //     signupMock();
    //     expect(signupMock).toHaveBeenCalled();
    // });

    // test('handleInput sets the state', () => {  
    //     const jumbotron = component.find('Jumbotron');
    //     const form =  jumbotron.find('Form');     
    //     const formControl1 = form.find(Form.Control).at(0);
    //     const formControl2 = form.find(Form.Control).at(1);
    //     const formControl3 = form.find(Form.Control).at(2);
    //     const formControl4 = form.find(Form.Control).at(3);
    //     formControl1.simulate("change", 'BradPitt');
    //     formControl2.simulate("change", 'iamcool');
    //     formControl3.simulate("change", 'iamcool');
    //     formControl4.simulate("change", 'BradIsCool@hotmail.com');        
    //     expect(component.state('username')).toBe('BradPitt');
    //     expect(component.state('password')).toBe('iamcool');
    //     expect(component.state('password2')).toBe('iamcool');
    //     expect(component.state('email')).toBe('BradIsCool@hotmail.com');       
    // });
});