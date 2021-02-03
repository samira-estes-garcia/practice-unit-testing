import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent'

//configure enzyme to use the adapter to make it work
//this would usually be done in a test setup file
Enzyme.configure({ adapter: new Adapter() });

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