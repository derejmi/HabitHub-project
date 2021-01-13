import News from '.';

describe('News', () => {
    let component, instance;
    const stubStories = [
      { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
      { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
    ]

    beforeEach(() => {
        component = shallow(<News />);
    })

    test('it updates state with correct story when handleStorySelect is called', () => {
        component.setState({stories: stubStories})
        instance = component.instance()
        instance.handleStorySelect(4151)
        expect(component.state('chosenStory')).toBe(stubStories[1])
    })
})