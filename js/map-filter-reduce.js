"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeOrMoreLangs = users.filter(user => {
return user.languages.length >= 3;
});
console.log(threeOrMoreLangs);

const emails = users.map (u => u.email);
console.log(emails);

const totalExperience = users.reduce((totalYears, user) => {
totalYears += user.yearsOfExperience;
return totalYears
}, 0);

accum += curr.yearsOfExperience;

console.log(totalExperience/ users.length);

const longestEmail = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail.length) {
        accum = user.email;
    }
 return longEmail
}, '');

const userNames = user.reduce((str, user) => {
str += user.name + ', ';
return str;

},'Your instructors are:').slice(0, -2) + '.';
console.log(userNames);