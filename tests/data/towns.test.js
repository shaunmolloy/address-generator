const towns = require("../../src/data/towns");

describe('towns', () => {
    test('has expected length', () => expect(towns.length).toBe(7));
});
