const { random, randomNumber, randomPostcode } = require('./helper/random');
const streets = require('./data/streets');
const towns = require('./data/towns');

const town = random(towns);

module.exports = {
    'street': `${randomNumber()} ${random(streets)}`,
    'town': town,
    'county': 'Lancashire',
    'postcode': randomPostcode(town),
}
