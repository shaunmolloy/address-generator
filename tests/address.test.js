const address = require('../src/address');

describe('address', () => {
    test('has street', () => expect(address).toHaveProperty('street'));

    test('has town', () => expect(address).toHaveProperty('town'));

    test('has county', () => expect(address).toHaveProperty('county'));

    test('has postcode', () => expect(address).toHaveProperty('postcode'));
});
