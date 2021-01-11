import FaveButton from '.';

describe('FaveButton', () => {
    let component;

    beforeEach(() => {
        component = shallow(<FaveButton />)
    })

    test('renders a span with a star (★) in it', () => {
        let starSpan = component.find('span')
        expect(starSpan.text()).toContain('★')
    })

    test('shows a grey star if the story is not faved', () => {
        component.setState({ faved: false })
        let starSpan = component.find('span')
        expect(starSpan.prop('style')).toHaveProperty('color', 'grey')
    })

    test('shows a gold star if the story is faved', () => {
        component.setState({ faved: true })
        let starSpan = component.find('span')
        expect(starSpan.prop('style')).toHaveProperty('color', 'gold')
    })

    test('toggles faved state when clicked', () => {
        let fakeEvent = { stopPropagation: () => "do nothing" }
        let starSpan = component.find('span')
        let initFavedState = component.state('faved')
        starSpan.simulate('click', fakeEvent)
        expect(component.state('faved')).toBe(!initFavedState)
    })
})