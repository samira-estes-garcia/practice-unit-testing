import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent'

//configure enzyme to use the adapter to make it work
//this would usually be done in a test setup file
Enzyme.configure({ adapter: new Adapter() });

describe('MyComponent', () => {
    //first test in the test suite makes sure that the text shown is the correct text
    it('should show text', () => {
        //shallow allows us to render a react component to an object in memory instead of to the DOM, makes it faster
        const wrapper = shallow(<MyComponent />);
        //wrapper.find finds elements based on the selector div div bc it's a div within a div
        //text also becomes a wrapper
        const text = wrapper.find('div div');
        //test to see that the text wrapper contains the text it should contain
        expect(text.text()).toBe('Text goes here');
    })
    //next test makes sure that the text is hidden when the button is clicked
    it('should hide text when the button is clicked', () => {
        const wrapper = shallow(<MyComponent />)
        //find the button in mycomponent
        const button = wrapper.find('button');
        //simulate the button being clicked with enzyme
        button.simulate('click');
        //find the div that should be hidden
        const text = wrapper.find('div div');
        //the text div shouldn't be found / shouldnt exist
        expect(text.length).toBe(0);
        // ^^ with original code in mycomponent, this test fails because the text div is not shown conditionally
    })

})

// describe function groups related tests into a block to create a test suite
// makes test output more readable
//contrived example to understand testing
// describe('MyComponent', () => {
//     it('should be true', () => {
//         const foo = true;
//         expect(foo).toBe(true);
//     });
//     it('should be false', () => {
//         const foo = true;
//         expect(foo).toBe(false);
//     })
// });

