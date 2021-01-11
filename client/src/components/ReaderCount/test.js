import ReaderCount from '.';

describe('ReaderCount', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ReaderCount />);
  });

  test("increases reader count when 'I\'ve read!' button is clicked", () => {
    const readButton = component.find('button');
    const initialReaderCount = component.state('readsCount');
    readButton.simulate('click');
    expect(component.state('readsCount')).toBe(initialReaderCount + 1)
  })
});