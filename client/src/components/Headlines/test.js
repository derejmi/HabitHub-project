import Headlines from '.';

describe('Headlines', () => {
  let component;
  const stubStories = [
    { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
    { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
  ]
  const stubHandleStorySelect = jest.fn()

  beforeEach(() => {
    component = shallow(<Headlines stories={stubStories} handleSelect={stubHandleStorySelect}/>);
  });

  test("renders story headlines", () => {
    expect(component.find('ul').text()).toContain("Test Story 1");
  });

  test("clicking on a story triggers a handleStorySelect function", () => {
    const story1 = component.find('li').first();
    story1.simulate('click');
    expect(stubHandleStorySelect.mock.calls.length).toBe(1);
    expect(stubHandleStorySelect.mock.calls[0][0]).toBe(2468)
  });

});