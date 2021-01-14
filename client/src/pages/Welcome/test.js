import Welcome from '.';
import backgroundVideo from './underwater.mp4';

describe('Welcome', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<Welcome />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });

    test('it contains a video element', () => {
        const video = component.find('video');
        expect(video.prop('src')).toEqual(backgroundVideo);
    });

    test('it contains a div with an className of quotationContainer', () => {
        const div = component.find('div');
        expect(div.prop('className')).toEqual('quotationContainer');
    });

    test('it contains a jumbotron with an className of jumbotron', () => {
        const jumbotron = component.find('Jumbotron');
        expect(jumbotron.prop('className')).toEqual('jumbotron');
    });

    it('renders links to 2 pages', () => {
        let links = component.find('Link')
        expect(links.length).toBe(2)
    });

    test('the links have the correct path', () => {
        const path1 = component.find('Link').at(0);
        const path2 = component.find('Link').at(1);
        expect(path1.prop('to')).toEqual('/login');
        expect(path2.prop('to')).toEqual('/signup');
    });
});