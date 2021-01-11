import FeaturedArticle from '.';

describe('FeaturedArticle', () => {
  let component, stubStory;

  beforeEach(() => {
    stubStory = { id: 1234, headline: 'Test Headline', snippet: 'Once upon a time...' }
    component = shallow(<FeaturedArticle story={stubStory}/>);
  });

  test("renders a story when passed a story object as a prop", () => {
    const storyBody = component.find('p')
    expect(storyBody.text()).toContain(stubStory.snippet)
  })
});