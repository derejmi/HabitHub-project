import TableButtons from '.';
import Dropdown from 'react-bootstrap/Dropdown';


describe('TableButtons', () => {
    let component, renderMock;
    
    beforeEach( () => {
        renderMock = jest.fn();
        component = shallow(<TableButtons renderNewRow={renderMock}/>);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('DropdownButton has nested DropdownButton Items and a button', () => {
        let mainDropdownButton = component.find('DropdownButton');
        let DropdownButtonItems = component.find(Dropdown.Item);
        let renderButton = component.find('Button');
        expect(mainDropdownButton.length).toBe(2);
        expect(renderButton.length).toBe(1);
        expect(DropdownButtonItems.length).toBe(6);
    });

    test('check button click', () => {
        const button = component.find('Button').first();
        const fakeEvent = { preventDefault: ()=> 'do nothing', target: {}};
        button.simulate('click', fakeEvent);
        renderMock();
        expect(renderMock).toHaveBeenCalled();
    });

    test('handleSelectHabit & handleSelectFreq set state name & frequency', () => {
        const dropdown1 = component.find('DropdownButton').at(0);
        const dropdown2 = component.find('DropdownButton').at(1);        
        dropdown1.simulate("select", 'Smoking');
        dropdown2.simulate("select", 'Weekly');
        expect(component.state('name')).toBe('Smoking');
        expect(component.state('frequency')).toBe('Weekly');
    });
});