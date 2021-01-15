import Login from '.';

describe('Login', () => {
    let component, loginMock;

    beforeEach(() => {
        loginMock = jest.fn();
        component = shallow(<Login login={loginMock}/>);
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

    test('check login', () => {
        const form = component.find('Form');
        const fakeEvent = { preventDefault: () => "do nothing" };
        form.simulate("submit", fakeEvent);        
        loginMock();
        expect(loginMock).toHaveBeenCalled();
    });
});