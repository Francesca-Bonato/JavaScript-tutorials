//(ADVANCED) JAVASCRIPT SUMMARY

//destructuring: it's a way to extract values from objects or arrays and store them into distinct variables.
//array elements are extracted on the basis of the position:

let people = ["Paul", "Mary", "Vincent", "Joseph"];
const [name1, name2, name3, name4] = people;
console.log(name1, name2, name3);

//object properties are extracted on the basis of the exact key name:

const person = {
  name: "Hillary",
  age: 77,
  city: "Chicago",
  hobbies: ["reading", "cooking", "singing"],
};
let { age, hobbies } = person;
console.log(age, hobbies);

//rest parameter: it's used to group an indefinite number of function arguments into an array.
function countThings(...things) {
  return things.length;
}

console.log(countThings(name1, name2, name3, name4));

//spread operator: allows to extract all elements from an array or properties from an object.
//it can be used to create a deep copy of an array/object:
const newPeople = [...people];
const newPerson = { ...person };

//it can also be used to merge arrays:
const duplicatePeople = [...people, ...newPeople];
console.log("the merged array is: ", duplicatePeople);

//-----
//ASYNCHRONOUS PROGRAMMING

//callbacks: functions that are passed as arguments of other functions. They can be used to ensure that functions run in the correct order.

function firstFunction(callback, name) {
  callback(name);
}

function secondFunction(value) {
  //this second function will be the callback
  console.log("Hi, ", value);
}

firstFunction(secondFunction, "Marta");

//setTimeout(callback, delay): delays the execution of the callback function by a specified time interval (expressed in milliseconds)

setTimeout(() => console.log("Good morning"), 500);

//setInterval(callback, delay): invokes the callback function at regular intervals, equal to the specified delay time (in milliseconds)

let id = setInterval(() => console.log("Hello!"), 1000);

//clearInterval(): stops the repeated execution of a callback function set by setInterval().

setTimeout(() => {
  clearInterval(id);
}, 4000);

//A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value;
//it is a way to handle asynchronous code more elegantly and avoid callback hell.

//A promise can be in one of three states:
//(1) Pending: The initial state when the promise is created, and the asynchronous operation is still in progress.
//(2) Fulfilled: The operation completed successfully, and the promise has a resulting value.
//(3) Rejected: The operation failed, and the promise has a reason for the failure.

function firstOperation(num) {
  //the function returns a Promise object:
  return new Promise((resolve, reject) => {     //the promise requires a callback function ("executor function") with 2 parameters: resolve and reject, which in turn are also callback functions.
    setTimeout(() => {                          //simulation of a delay using a setTimeout().   
      if (num >= 5) {
        resolve(num-3);                         //the value passed to the "resolve" function becomes the fulfillment value of the promise.
      } else {
        reject("ko");                           //the value passed to the "reject" function becomes the rejection reason of the promise.
      }
    }, 4100);
  });
}

//the methods then() and catch() are used to handle the result of the promise:
firstOperation(5)
  //handling the success case
  .then(data => console.log('success:', data)) //then() takes a callback function that will be executed if the promise is fulfilled.
  //handling the error case
  .catch(error => console.error(error))         //catch() takes a callback function that will be executed if the promise is rejected.

function secondOperation(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num-2);
      } else {
        reject("ko");
      }
    }, 1000);
  });
}

//It is possible to chain the handling of multiple promises with a sequence of then(), in which the result of each then() is passed to the next one in the chain.

firstOperation(5)
  .then(result1 => {
    console.log('handling of the first promise:', result1);
    return secondOperation(result1);
    })
  .then(result2 => {
    console.log('handling of the second promise:', result2);
    })
  .catch(error => {
    console.error(error);
    })

//However, a clearer and more elegant approach is to use the async/await syntax:

//The async keyword is used to define a function that returns a Promise:
async function checkPromises() {
  let result1 = await firstOperation(5);            //The await keyword is used inside an async function to wait for the completion of a Promise.
  let result2 = await secondOperation(result1);     //When await is used, it pauses the execution of the function until the Promise is resolved, and it returns the resolved value.
  console.log('async/await:', result1, result2);
}

checkPromises();

//ERROR HANDLING: 

//1: Try/catch syntax. It's the method typically used with async/await.

async function checkPromisesWithErr() {
    try {                                           //The "try" block wraps the code that may potentially throw an error.
        let result1 = await firstOperation(5);                
        let result2 = await secondOperation(result1);           
        console.log('async/await with error handling:', result1, result2);
    } catch(err) {                                  //The "catch" block catches any error thrown within the try block.
        console.error(err);
    } finally {                                     //the "finally" block is executed regardless of whether an error occurred or not.
        console.log("Do you understand asynchronous programming now?"); 
    }
}

checkPromisesWithErr();

//2. Callback-based error handling: a callback parameter must be passed to the asynchronous function. 
//This callback is triggered when the asynchronous operation finishes. 

let someCondition = true;

function performOperation(callback) {
    setTimeout(() => {
        if (someCondition) {
            callback(null, 'condition verified');        //The first parameter of the callback represents an error object (if any), subsequent parameters convey the operation results.
        } else {
            callback(new Error ('404'), null);
        }
    }, 7000);
}  

performOperation((error, result) => {
    if (error) {
        console.error('Caught an error: ', error);
    } else {
        console.log(`Callback-based error handling: ${result}`);
    }
});

//3. Throw statement: in synchronous code errors can be "thrown" manually, but they still require to be caught using the try/catch block.

let condition = false;

function throwError () {
    try {
        // Some code that might encounter an error
        if (condition) {
            throw new Error('An error occurred due to some condition.');
        }
    } catch (err) {
        // This block will catch the error thrown in the try block
        console.error('Caught an error: ', err);
    }; 
}

setTimeout(throwError, 8000);