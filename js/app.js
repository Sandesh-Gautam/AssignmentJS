// 1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.

// Promises handle asynchronous operations, improving readability, error handling, and avoiding callback hell.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});

promise.then(result => console.log(result)).catch(error => console.error(error));

// 2. What is a closure in JavaScript? Provide an example.

// Closure: A function that retains access to its lexical scope, even when called outside that scope.
function outer() {
    let a = 'hello';
    return function inner() {
        console.log(a);
    }
}
const closure = outer();
closure(); // logs 'hello'

// 3. What is a callback function and why is it used in JavaScript?

// Callback Function: A function passed to another function to be executed later.
// Use: Handles asynchronous operations and event handling.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(result => console.log(result));

// 4. What are async/await in JavaScript and how do they improve asynchronous programming?

// async/await: Syntax for handling promises, making asynchronous code look synchronous, and improving readability.
async function fetchDataAsync() {
    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchDataAsync();

// 5. Write the difference between ES6 and JS.

// ES6: A major update to JavaScript adding features like let/const, arrow functions, and classes.

// 6. What are some of the major features introduced in ES6?

// Major ES6 Features:

// let and const
let x = 10;
const y = 20;

// Arrow functions
const add = (a, b) => a + b;

// Template literals
let name = 'Sandesh';
let greeting = `Hello, ${name}`;

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person = new Person('Sandesh');
person.greet();

// Modules (assuming we have another file with an export, here we mock it)
// import { moduleFunction } from './module.js';
// moduleFunction();

// Promises
const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise example resolved!"), 1000);
});
promiseExample.then(result => console.log(result));

// PROBLEMS
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Alice', age: 30 },
                { id: 2, name: 'Bob', age: 25 },
                { id: 3, name: 'Charlie', age: 35 },
            ];
            resolve(users);
        }, 2000);
    });
}

fetchData().then(users => console.log(users));

function createCounter() {
    let count = 0;
    return {
        increment() {
            count += 1;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

function processData(numbers, callback) {
    return numbers.map(callback);
}

const numbers = [1, 2, 3, 4];
const doubled = processData(numbers, num => num * 2);
console.log(doubled);

async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'Alice', age: 30 },
                { id: 2, name: 'Bob', age: 25 },
                { id: 3, name: 'Charlie', age: 35 },
            ];
            resolve(users);
        }, 2000);
    });
}

fetchDataAsync().then(users => console.log(users));

function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3]));

function filterNumbers(numbers) {
    return numbers.filter(num => num >= 10);
}

console.log(filterNumbers([5, 10, 15]));

function findNumber(numbers) {
    return numbers.find(num => num > 15);
}

console.log(findNumber([10, 20, 30]));

function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers([1, 2, 3, 4]));

function transformUsers(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

console.log(transformUsers([
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
]));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

const person = new Person('John', 40);
console.log(person.describe());

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

const student = new Student('Jane', 22, 'A');
console.log(student.describe());
console.log(student.study());

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve([
                    { id: 1, name: 'Alice', age: 30 },
                    { id: 2, name: 'Bob', age: 25 },
                    { id: 3, name: 'Charlie', age: 35 },
                ]);
            } else {
                reject('Failed to fetch data');
            }
        }, 2000);
    });
}

fetchDataWithError().then(users => console.log(users)).catch(error => console.error(error));

async function fetchDataWithErrorAsync() {
    try {
        const users = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve([
                        { id: 1, name: 'Alice', age: 30 },
                        { id: 2, name: 'Bob', age: 25 },
                        { id: 3, name: 'Charlie', age: 35 },
                    ]);
                } else {
                    reject('Failed to fetch data');
                }
            }, 2000);
        });
        return users;
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithErrorAsync();

function getUniqueHobbies(users) {
    return users.reduce((acc, user) => {
        user.hobbies.forEach(hobby => {
            if (!acc.includes(hobby)) {
                acc.push(hobby);
            }
        });
        return acc;
    }, []);
}

console.log(getUniqueHobbies([
    { name: 'Alice', hobbies: ['reading', 'swimming'] },
    { name: 'Bob', hobbies: ['reading', 'cycling'] },
]));


