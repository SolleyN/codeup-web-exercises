"use strict";

// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// const soda  = {
//     brandName: 'pepsi',
//     type: 'dark' +
//         'tasty',
//     volumeInLiters: 10,
//     priceInCents: '$ 1.50,',
//     expirationDate: 'December 29, 1989',
//     dateOfPreviousSips: [
//         '1/10/1990',
//         '2/6/1990',
//         '4/6/1991',
//
//     ]
//
// };
// console.log(soda);

const drink1 ={
    brandName: "Pepsi",
    type: 'Cherry',
    volumeInLiters: 0.01,
    expirationDate: 29+"th",
    dateOfPreviousSips: [ 1, 2, 3, 4, 5, '9th'],
    isOpen: true
}
console.log(drink1);
console.log(drink1.isOpen);