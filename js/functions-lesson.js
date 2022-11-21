

//let message = myFunction("Nickolas");
//console.log(message);
let person1 = "Billy", person2 ="Bob";
fight(person1, person2);

let x= isEven(777777777);
console.log(x);

let i= isEven(9456393);
console.log(i);

let breakShit =isEven(true);
console.log(breakShit);

function myFunction(name) {
    return "Thank you, " + name + " . You have ran my function";
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " Right in the kisser.");
}
function isEven(num){
    // GET THE PIECES OF THE PUZZLE!!!!!
    // Put the pieces of the puzzle into variable
    let number = num;
    let answer = (number % 2 == 0);

    // Finally return the answer
    return answer;


}