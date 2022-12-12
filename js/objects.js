
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // const person = {
    //     firstName: "Nickolas",
    //     lastName: "Solley"
    // };
    // console.log(person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function () {
    //     return "Hello from " + this.firstName + " " + this.lastName; // `Hello from ${this.firstName} ${this.lastName}`;
    // }
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//     let shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
//     shoppers.forEach(function(shopper) {
//         if (shopper.amount > 200) {
//
//             // Shoppers that get the discount
//
//             let savings = parseFloat(shopper.amount) *.12;
//
//             let total = parseFloat(shopper.amount) - (savings);
// let amountAsACurrency = parseFloat(shopper.amount).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
//             console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}, and received a 12% discount.\n ${shopper.name}'s discounted total is ${total.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}, with a savings of ${savings.toLocaleString()}`);
//
//         } else {
//             // Shoppers that don't get the discount
//         } let remaining = parseFloat(200 - (shopper.amount)).toLocaleString('en-US',{style: 'currency', currency: 'USD'});
//
//         console.log(`${shopper.name} has a bill of ${amountAsACurrency} and did not receive a discount.`)
//     });







    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Wizard Of Earthsea",
            author: {
                firstName: 'Ursula',
                lastName: 'Leguin'
            }
        },
        {
            title: 'The Alchemist',
            author: {
                firstName: 'Nicolas',
                lastName: 'Flamel'
            }

        },
        { title: 'Harry Potter And The Order Of The Phoenix',
            author: {
             firstName: 'J.K.',
                lastName: 'Rowling'
            }

        },
        { title: 'The Magicians',
            author: {
             firstName: 'Leve',
                lastName: 'Grossman'
            }

        },
        { title: 'The Little Match Girl',
            author: {
            firstName: 'Hans',
                lastName: 'Christian Anderson'
            }

        }
    ];
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

     // books.forEach(function(book, index) {
     //     let bookNumber = index + 1;
     //     let fullName = `${book.author.firstName} ${book.author.lastName}`;
     //     let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor: ${fullName}\n---`;
     //      console.log(message);
     //
     // });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    let myAuthor ="Nickolas Solley";

     let nickolasBook = createBook("Become a Coding God", "Nickolas Solley")
    function createBook(title, author) {
        let authorArray = author.split(' '); // ['Nickolas, Solley']
        let bookObject = {
            title: title,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]
            },
        }

        return bookObject;
    }

    let book2 = [
        createBook('The Wizard Of Earthsea', 'Ursula Leguin'),
        createBook('The Alchemist', 'Nicolas Flamel'),
        createBook('The Magicians', 'Leve Grossman'),
        createBook('Harry Potter And The Order Of The Phoenix', 'J.K. Rowling'),
        createBook('The Little Match Girl', 'Hans Christian Anderson')
    ];
    // console.log(book2);

    function showBookInfo(book, index) {

        let bookNumber = index + 1;
        let fullName = `${book.author.firstName} ${book.author.lastName}`;
        let message = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor: ${fullName}\n---`;
        console.log(message);


    }
    book2.forEach(function)(book, index,);
    showBookInfo(book, index);