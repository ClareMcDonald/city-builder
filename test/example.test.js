// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('test createCountString function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You have changed the waterfront 6 times, the skyline 4 times, and the castle 9 times.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(6, 4, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should return You have changed the waterfront 6 times, the skyline 4 times, and the castle 9 times.');
});
