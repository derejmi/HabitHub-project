import Footer from '.';

describe('Footer', () => {
    let component;

    beforeEach( () => {
        component = shallow(<Footer />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('the footer text should be correct', () => {
        const footer = component.find('#footer');
        expect(footer.text()).toBe('Created by HabitHub Team | © futureproof 2021');
    });

    test('number of p elements', () => {
        const pElement = component.find('p');
        expect(pElement).toHaveLength(1);
    });
});