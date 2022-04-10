const { random, randomNumber, randomPostcode } = require('../../src/helper/random');

describe('random', () => {
    describe('random', () => {
        global.Math.random = () => 0;
        const values = [ 'one', 'two', 'three' ];

        test('has random value', () => expect(random(values)).toBe('one'));
    })

    describe('randomNumber', () => {
        global.Math.random = () => 0;

        test('has random number', () => expect(randomNumber(1, 10)).toBe(1));
    });

    describe('randomPostcode', () => {
        global.Math.random = () => 0;

        test('has random postcode', () => expect(randomPostcode()).toBe('M1 0AA'));
    });
});
