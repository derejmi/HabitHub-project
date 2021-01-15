import App from '../App';

describe('App', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<App />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('checks components exist', () => {
        const header = component.find('Header');
        const footer = component.find('Footer');
        const switcher = component.find('Switch');
        expect(header.exists()).toBe(true);
        expect(footer.exists()).toBe(true);
        expect(switcher.exists()).toBe(true);
    });

    test('number of routers', () => {
        const routerSwitch = component.find('Switch');
        const router = component.find('Route');
        const privateRouter = component.find('PrivateRoute');
        const loggedOutRoute = component.find('LoggedOutRoute');
        expect(routerSwitch.length).toBe(1);
        expect(router).toHaveLength(1);
        expect(privateRouter).toHaveLength(1);
        expect(loggedOutRoute).toHaveLength(2);
    });

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({
            isLoggedIn: false,
        
            currentUser: {
              id: 0,
              username: " ",
              email: " ",
              password: " ",
            },
        
            habitContainer: [
              {
                habit1: {
                  id: 0,
                  name: " ",
                  updatedDate: "date",
                  frequency: 0,
                  dueDate: " ",
                  streak: 0,
                  userId: " ",
                },
        
                habit2: {
                  id: 0,
                  name: " ",
                  updatedDate: "date",
                  frequency: 0,
                  dueDate: " ",
                  streak: 0,
                  userId: " ",
                },
              },
            ]})
    });
});