"use strict";

/* ########################################################################## */
// let city = "San Antonio"
// if (city == "Boston"){
//     console.log("The Cities is Boston");
//     console.log("Go Red Sox!");
// } else if (city == "San Antonio") {
//     console.log("The Cities is San Antonio");
//     console.log("Go Spurs Go!");
// }
//     else {
//     console.log("The condition is false");
// }

// addNumbers("5");
// function addNumbers(num1){
//     if (typeof num1 == "string");{
//         let number;
//         number = parseInt(num1);
// }
//     return num1 + 2;
//}
// let pizzaPreference = prompt("What is your favorite pizza?");
// if (pizzaPreference == "Cheese") {
//     console.log("Thanks Kevin from Home Alone!");
// } else if (pizzaPreference == "Pineapples and hot sauce"){
//
//
//     console.log("What a coincidence, I like pineapples and hot sauce too!");
// }
// else {
//     console.log("Oh, okay... that's coolio.... my Aunt is vegan too...LOL");
// }

// this is ternary operator, shorthand the if else
// let success = true;
// // if (success) {
// //     let message;
// //     message = "The operation was successful.";
// // } else {
// //         message = "The operation was not successful."
// //     }
// let message = success ? "The operation was successful." : "The operation was not successful.";
//
// console.log(message);

// switch(pizzaPreference) {
//     case "cheese":
//         console.log("Thanks Kevin from home alone.");
        //do this
        // and this
        // and maybe this
//         break;
//     case  "Pineapples and hot sauce.":
//         console.log("What a coincidence, I like pineapples and hot sauce too!");
//         //do this
//         // and this
//         // and mayyyyybeeee this
//         break;
//     default:
//         console.log(" Oh, okay... that's cool... my aunt's vegan too...");
//         break;
// }
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

let colorName =("string");
function analyzeColor(colorName){
}
 colorName = prompt("What is your color name?")

    if (colorName == "red") {
        console.log("Red is the color of a fire hydrant."); }
    else {
        if (colorName == "blue") {
            console.log("Blue is the color of the sky.");
    } else {
         if  (colorName == "green");
          console.log("Green is the color of grass.")
      }
          console.log("I don't know anything about " + colorName);
}







// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor);

//console.log(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */