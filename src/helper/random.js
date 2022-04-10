const postcodes = require('../data/postcodes');

function random(input) {
    return input[Math.floor((Math.random() * input.length))];
}

function randomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * max) + min;
}

function randomPostcode(town) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefix = random(postcodes[town ?? 'Manchester']);
    const suffix = '' + (
        randomNumber(0, 10)
        + alphabet[randomNumber(0, alphabet.length)]
        + alphabet[randomNumber(0, alphabet.length)]
    );

    return `${prefix} ${suffix}`;
}

module.exports = {
    random,
    randomNumber,
    randomPostcode,
}
