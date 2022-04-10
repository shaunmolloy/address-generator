const postcodes = require("../../src/data/postcodes");

describe('postcodes', () => {
    test('has expected length', () => expect(Object.keys(postcodes).length).toBe(7));

    test('Bolton has expected length', () => expect(postcodes.Bolton.length).toBe(9));

    test('Manchester has expected length', () => expect(postcodes.Manchester.length).toBe(19));

    test('Oldham has expected length', () => expect(postcodes.Oldham.length).toBe(16));

    test('Salford has expected length', () => expect(postcodes.Salford.length).toBe(9));

    test('Stockport has expected length', () => expect(postcodes.Stockport.length).toBe(19));

    test('Trafford has expected length', () => expect(postcodes.Trafford.length).toBe(4));

    test('Wigan has expected length', () => expect(postcodes.Wigan.length).toBe(8));
});
