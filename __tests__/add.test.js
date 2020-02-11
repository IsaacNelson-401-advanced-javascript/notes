jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: 'should work!',
        aa: 'should not work... aa',
        add: 'hey there.',
        dadd: 'dadd shouldnt work..',
        f: 'press f to pay respects'
    }
});

const Input = require('../lib/input.js');

describe('Testing the Input', () => {
it('logs error when ')
})