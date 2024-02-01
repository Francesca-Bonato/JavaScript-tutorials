//JAVASCRIPT SUMMARY

//variable declaration
//variables' names must be descriptive, written in camelCase, and cannot start with numbers or contain punctutation marks (except _).

let a = 1;      //new notation, can be re-assigned.
const b = 2;    //new notation, cannot be re-assigned.
var c = 3;      //old notation, can be re-assigned.

//chained variable assignments:
let d = e = f = 0;

//6 primitive data types + 2 non-primitive (objects and symbols)

let number = 1;                     //numeric type (both floating and integer). Includes Inf, -Inf, NaN (Not a Number).
let bigInt = 2**53;                 //bigInt type (numbers > 2**53 - 1 and numbers < -(2**53 - 1) ).
let string = 'Hello';               //string type, uses single or double quotes.
let boolean = true;                 //boolean type, can only have 2 values: true or false.
let undefinedVariable = undefined;  //undefined type, equals to "value not assigned". It's the default initial value for not assigned variables.
let nullVariable = null;            //null type, equals to "nothing", "empty", or "value unknown".

//to print a variable:
console.log(string);

//casting (data type conversion)

let casting1 = String(number);         
let casting2 = Number(boolean);     //true converts to 1; false converts to 0.
let casting3 = Number(string);      //a number-containing string converts to that number, otherwise converts to NaN.
let casting4 = Boolean(number);     //any number converts to true (is truth-y); 0 converts to false (is false-y).
let casting5 = Boolean(string);     //if the string contains characters is truth-y, if empty it's false-y.

console.log(casting1, casting2, casting3, casting4, casting5);

//to check the data type of a variable:
console.log(typeof (casting1), typeof (casting2), typeof (casting3), typeof(casting4), typeof (casting5));

//comparison of data types:
//1. comparison with coercion (forced data type conversion): == operator
//2. strict comparison (the data type must be equal): === operator

console.log('comparison with coercion:', number == boolean);     //returns true.
console.log('strict comparison:', number === boolean);           //returns false.

//It is possible that at the same time two values are equal but one is truth-y and one is false-y. 

let g = 0;              //false-y
let h = '0';            //truth-y
console.log ('(g == h)?', (g == h));    //returns true.

//basic operators:

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;
let exponentiation = a**b;

//modify-in place

a += 5;     // a = a + 5
a *= 3;     // a = a * 3
a /= 2;     // a = a / 2
a -= 1;     // a = a - 1

//increment & decrement

a++     // a = a + 1. console.log(++b) = 3
++a     // a = a + 1. console.log(b++) = 2
a--     // a = a - 1
--a     // a = a - 1

//logic operators

let condition1 = a > 0 && b < 3;        //AND: both must be true for condition1 to be true. Logic equivalent of multiplication.
let condition2 = a > 0 || b < 3;        //OR: one must be true for condition 2 to be true. Logic equivalent of addition.
let condition3 = !(a > 0);              //NOT: the boolean value of the following condition is inverted.

//ternary/conditional operator
let result1 = 5 > 0 ? "5 greater than 0" : "5 smaller than 0";
let result2 = d > 0 ? "d greater than 0" : (d < 0 ? "d smaller than 0" : "d equal to 0");
console.log(result1);

//if-else conditional statement

if (a > 0 && b < 3) {
    console.log('both conditions are verified');
} else if (a > 0 || b < 3) {
    console.log('only one condition is verified');
} else {
    console.log('none of the conditions is verified');
}

//switch construct: used when we have many different cases to check.

let weekDay = 3; 

switch (weekDay) {
    case 1:
        console.log("it's monday");
        break;
    case 2:
        console.log("it's tuesday");
        break;
    case 3:
        console.log("it's wednesday");
        break;
    case 4:
        console.log("it's thursday");
        break;
    case 5: 
        console.log("it's friday");
        break;
    case 6:
        console.log("it's saturday");
        break;
    case 7:
        console.log("it's sunday");
        break;
    default:
        console.log("choose a week-day beetween 1 and 7");
}

//objects: non-indexed data structures.
let object = {
    key1 : 'value1',    //property 1
    key2 : 'value2',    //property 2
}

console.log(object.key1);       //to access a property of an object: object.key or object.["key"]
console.log(object["key1"]);

if ("key1" in object) {         //to check for the presence of a key in an object: use the "in" operator + quotes around the key name
    console.log(object.key1 + ' is present in the object');  
}

//arrays: indexed data structures. They are a special type of objects.
let numbers = [1, 2, 3];

console.log(numbers[0]);    //to access an element of an array: array[index]

//for loop
for (let i = 0; i < numbers.length; i++) {
    console.log('for loop:' + numbers[i]);
}

//for ... in loop: specific for objects
for (let key in object) {
    console.log('for-in loop:' + key);
}

//for... of loop: specific for arrays
for (let number of numbers) {
    console.log('for-of loop:' + number);
}

//while loop: equivalent to for-loop
let j = 0;
while (j < numbers.length) {
    console.log('while loop:' + numbers[j]);
    j++;
}

//do ... while loop: the loop body and condition are inverted. In this way, the code will always perform the loop body at least once.
let k = 0;
do {
    console.log('do-while loop:' + numbers[k]);
    k++;
} while (k < numbers.length)

//functions: 

//function definition. Functions can be written anywhere in the code and can be called anywhere in the code.
function nameOfFunc (par1, par2) {          //par1, par2 are local variables.
    let sum = par1 + par2;  
    return sum;                             //if an explicit return value is not defined, the function returns "undefined". 
                                            //To return mutiple values from a function, it's possible to return an array or object containing those values.         
}


//function expression: the function is assigned to a variable. With this method, the function can only be called AFTER its expression.
let variableFunc = function (par1, par2) {
    let sum = par1 + par2;
    return sum;
}

//arrow function: quick, compact way to create anonymous functions (they have no name, therefore they must be assigned to a variable or used as callback functions)

let arrow = ((par1, par2) => par1 + par2);  //If there are mutiple parameters or no parameters, the parentheses () are mandatory. 
                                            //If there is only one parameter, they can be omitted.
                                            //Implicit return if the arrow function is defined on a single line.
                                            //Explicit return is required for multi-line arrow functions (they also require {}).

console.log(nameOfFunc(2, 3));
console.log(variableFunc(2, 3));
console.log(arrow(2, 3));

//a function that is a property of an object is called its method.

//(some) object methods:

//Object.freeze(): makes the object unmodifiable.

Object.freeze(object);
object.key1 = 'value3';
console.log(object.key1)                    //still 'value1'

//Object.keys(): returns an array containing the keys of the object.

console.log(Object.keys(object))            //returns: ['key1', 'key2'] 

//Object.values: returns an array containing the values of the properties of the object.

console.log(Object.values(object))          //returns: ['value1', 'value2'] 

//(some) array methods:

//Array.isArray(): returns a boolean value after verifying if the argument is an array

console.log(Array.isArray(numbers))         //returns true

//length: returns the array length.

console.log(numbers.length)                 //returs: 3

//concat(): returns a new array merging two given arrays 

let otherNumbers = [4, 5, 6]                
console.log(numbers.concat(otherNumbers))   //returns: [1, 2, 3, 4, 5, 6]

//toString(): returns a string containing the comma-separated values of each element of the array.

console.log(numbers.toString())             //returns: "1,2,3"

//join(): adds all the elements of an array into a string, separated by the specified separator string.

console.log(numbers.join("-"))              //returns: '1-2-3'

//pop(): removes the last element from an array and returns it.

console.log(numbers.pop())                  //returns 3

//push(): appends new elements to the end of the array and returns the new length of the array

console.log(numbers.push(3));               //returns 3

//unshift(): inserts new elements at the start of an array and returns its new length

console.log(numbers.unshift(0));               //returns 4

//shift(): removes the first element from an array and returns it.

console.log(numbers.shift());               //returns 0

//filter(): returns a new array with all the elements of the array that satisfy a given condition.

console.log(numbers.filter(number => number > 1))                   //returns [2, 3]

//find(): returns the first element of the array that satisfy a given condition.

console.log(numbers.find(number => number > 1))                     //returns 2

//forEach(): calls a specified callback function for each element of the array;
//the callback function accepts up to 3 parameters: (1) the value of the current element of the array, (2) its index, (3) a reference to the entire array.

numbers.forEach(number => console.log(number + "!"))                //returns 1! 2! 3!

//map(): calls a specified callback function for each element of the array and returns an array that contains the results;
//the callback function ccepts up to 3 parameters: (1) the value of the current element of the array, (2) its index, (3) a reference to the entire array.

console.log(numbers.map(number => number + "!"))                    //returns ['1!', '2!', '3!']

//reduce(): calls a specified callback function for each element and returns an accumulated result;
//a is the accumulator, number is the current element of the array, and the number 0 is the starting value of the accumulator.

console.log(numbers.reduce((a, number) => a + number, 0))           //returns 6

//some(): determines whether at least one element of the array satisfy the specified condition. It returns true/false.

console.log(numbers.some(number => number % 2 === 0))               //returns true

//every(): determines whether all elements of the array satisfy the specified condition. It returns true/false.

console.log(numbers.every(umber => number % 2 === 0))               //returns false

//includes(): determines whether an array includes a certain element. It returns true/false.

console.log(numbers.includes(3))                                    //returns true

//sort(): sorts the elements of an array in place and returns the sorted array;
//the default sort order is ascending, built upon converting the elements intro strings. For strict numeric descending order:

console.log(numbers.sort((a,b) => b - a))                           //returns [3, 2, 1]

//toSorted(): sorts the elements of an array and returns a new array with the sorted elements;
//the sorting order is the same of sort(). For a strict numeric ascending order:

console.log(numbers.sort((a,b) => a - b))                           //returns [1, 2, 3]

//slice(): returns a portion of the array indicated through a starting index (included, 1° parameter) and an end index (not included, 2° parameter)  

console.log(numbers.slice(1, 3))                                    //returns [2, 3]

//splice(): removes elements form an array and optionally inserts new elements in their place. It returns the deleted elements.
//the elements are remvoed from the starting index (1° parameter) up to a number of elements equal to the delete count (2° parameter), and optionally inserts the following parameters.

console.log(numbers.splice(1, 3, 4, 5))                             //returns [2, 3]
console.log(numbers);                                               //returns [1, 4, 5]