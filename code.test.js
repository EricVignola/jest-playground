const orderTotal = require('./code.js');

it('sumOrder 1', () => {
    expect(orderTotal(
        items = [
            {name: "saber", price: 99},
            {name: "shield", price: 10},
            {name: "club", price: 5}
        ]
    )).toBe(114);
});

it('sumOrder 2', () => {
    expect(orderTotal(
        items = [
            {name: "saber", price: 99},
            {name: "boots", price: 50},
        ]
    )).toBe(149);
});