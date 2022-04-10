const streets = require('../../src/data/streets');

describe('streets', () => {
    test('has expected length', () => expect(streets.length).toBe(11));
});
