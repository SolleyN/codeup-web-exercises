

    // converting between numbers and strings
    // functions overview (especially scope, higher order functions, IIFE)
    // switch case
    // ternary
    // using conditionals with functions

    "use strict";

    // ======== JS BASICS

    // How can a number type be converted to a string?

    // let num = 7;
    // console.log(String(num));
    // console.log('' + num);
    // console.log(num.toString());

    // How can a string be converted to a number?

    // let str = '7';
    // console.log(parseFloat(str));
    // console.log(parseInt(str));
    // console.log(Number(str));


    // How do you determine if a value is a number or numeric string?

    // function isNumeric(input) {
    //     return !isNaN(parseFloat(input));
    // }
    //
    // console.log(isNumeric(7), true);
    // console.log(isNumeric('7'), true);
    // console.log(isNumeric('bob'), false);
    // console.log(isNumeric(true), false);


    // ======== FUNCTIONS

    // What is the difference between a function parameter and argument?

    // param - in the definition to represent what to do with inputs
    // arguments - input values when you call the function

    // const greeting = 'howdy';
    //
    // function sayGreeting(greeting) {
    //     greeting = greeting.toLowerCase().slice(1);
    //     return greeting;
    // }
    //
    // console.log(sayGreeting('HOWDY!'));







    // What will appear in the console for each call to bark()?

    // function bark(sound) {
    //     return 'The dog says ' + sound;
    // }

    // bark("Bow wow");
    // console.log(bark("Bow"));
    // console.log(makeDogSound('Bow'));
    // console.log(bark());
    // console.log(bark()());
    // console.log(bark("bow wow", 3, true, "asdf"));


    /* ===== FUNCTION DECLARATION

        function doSomething(OPTIONAL_PARAMETERS) {
            // doing something...
            return SOME_VALUE;
        }

    */


    /* ===== FUNCTION EXPRESSION

        const doSomething = function(OPTIONAL_PARAMETERS) {
            // do something
            return SOME_VALUE;
        };

    */
    // doSomething();


    // function sayHello(greeting) {
    //     return greeting;
    // }
    //
    // var sayHello = function(greeting) {
    //     return greeting;
    // };
    //
    // const sayHello = (greeting) => {
    //     return greeting;
    // }



    // ===== MINI PROBLEMS

    // Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive(input) {
    return input = 5;
}
    // Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive(input){

}

    const b = !!(input === 5, '5');
    return b;

    // Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

    // Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

    // Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

    // example input: getSmallerSegment("Codeup", 3)
    // example output: "cod"



    // ===== SCOPE and IIFE

    // var keyword creates "Function Scope" variables

    // let globalVar = "Look, I'm Global!"; // declare a global variable
    //
    // function scopeExample() {
    //     let localVar = "Look, I'm Local!"; // declare a local variable
    //     alert(localVar); // localVar is accessible here
    //     alert(globalVar); // globalVar is accessible here
    // }
    //
    // scopeExample();
    //
    // alert(localVar); // localVar is NOT accessible here and this will produce an error


    // (function() {
    //     var aaaa = 'encapsulated in IIFE';
    // })();


    // let alsoNotGlobal = 'not on the window object';
    //
    // const alsoNotGlobalYAY = 'not on the window object either';

    // var is 'function-scoped'

    // {
    //     var x = 3;
    // }
    // console.log(x);

    // const and let are 'block-scoped'

    // function addOne(input) {
    //     return input + y;
    // }
    //
    // console.log(y);



    // =====  CALLBACK, ANONYMOUS, HIGHER ORDER FUNCTIONS

    // function returnFive() {
    //     return 5;
    // }

    // addTwo is a "Higher Order Function" because it takes in other functions as arguments
    // functions that return a function are also "Higher Order Functions"

    // function addTwo(fn) {
    //     return returnFive() + 2;
    // }
    //
    // console.log(addTwo(returnFive)); // Callback function "returnFive" is passed to addTwo

    // console.log(addTwo(function() { // Anon function passed to addTwo()
    //     return 10;
    // }))

    // other common higher order functions built in to JS: forEach, setInterval, setTimeout, map, filter, reduce


    // =====  IIFE


    // ================ FUNCTION DRILLS


    // 1) Make a function called returnTwo() that returns the number 2 when called
    // ---Test this function with console.log(returnTwo())



    // 2) Make a function called returnName() that returns the string of your name
    // ---Test this function with console.log(returnName())



    // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
    // ---Test this function with console.log(addThree(5))



    // 4) Make a function called sayString() which returns the string input passed in.
    // ---Test this function with console.log(sayString())



    // 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
    // ---Test this function by directly calling sayHowdy()
    // ---Remember this function does not need a defined return value


    // ======== CONDITIONALS (switch / ternary / with functions)


    // write a function, abbrevToDay, that takes in a three-character abbreviation for the day of the week and returns the complete day of the week
    // Example: abbrevToDay('mon') returns 'Monday'



