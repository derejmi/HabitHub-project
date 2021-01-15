import TableButtons from '.';
import Form from 'react-bootstrap/Form';
import 'regenerator-runtime/runtime';


describe('TableButtons', () => {
    let component, renderMock;
    
    beforeEach( () => {
        renderMock = jest.fn();
        component = shallow(<TableButtons fetchHabits={renderMock}/>);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('Form has nested Form Items and a button', () => {
        let mainForm = component.find('Form');
        let FormControls = component.find(Form.Control);
        let renderButton = component.find('input');
        expect(mainForm.length).toBe(1);
        expect(renderButton.length).toBe(1);
        expect(FormControls.length).toBe(2);
    });

    test('check Form submit', () => {
        const button = component.find('Form');
        const fakeEvent = { preventDefault: ()=> 'do nothing', target: {}};
        button.simulate('submit', fakeEvent);
        renderMock();
        expect(renderMock).toHaveBeenCalled();
    });

    test('handleSelectHabit & handleSelectFreq set state name & frequency', () => {
        const FormControl1 = component.find(Form.Control).at(0);
        const FormControl2 = component.find(Form.Control).at(1);        
        FormControl1.simulate("change", 'Smoking');
        FormControl2.simulate("change", 'Weekly');
        expect(component.state('name')).toBe('Smoking');
        expect(component.state('frequency')).toBe('Weekly');
    });
});