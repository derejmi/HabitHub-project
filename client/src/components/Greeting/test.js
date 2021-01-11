import Greeting from './';

describe('App', () => {
  let component, form, nameInput;
  const fakeEvent = { preventDefault: () => "do nothing" };

  beforeEach(() => {
    component = shallow(<Greeting />);
    form = component.find('form');
    nameInput = component.find('#nameInput');
  });

  test("greets a user as 'friend' if no username given", () => {
    expect(component.find('#greeting').text()).toBe("Hi there, friend!");
  });

  test("updates state when a user enters input", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "B"}});
    expect(component.state('nameInput')).toBe('B');
  });

  test("greets a user by name if a username is given", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "Beth"}})
    form.simulate("submit", fakeEvent);
    expect(component.find('#greeting').text()).toBe("Hi there, Beth!");
  });

  test("clears user input after submission", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "Beth"}})
    form.simulate("submit", fakeEvent);
    expect(component.find('#nameInput').props().value).toBe("");
  });

});