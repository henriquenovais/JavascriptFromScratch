// console.log("hello world!");
// console.log(123);
// console.log(true);
// var greeting = 'Hello!';
// console.log([1,2,3,4]);
// console.log({a: "this is an object", b: greeting});
// console.table({a: "this is an object", b: greeting});

// console.error('This is some error!');
// // console.clear(); // to clear the console
// console.warn('This is a warning!');
// console.time('Hello!')
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
// console.timeEnd('Hello!'); //Counts the time to execute this functions!

//To open console press F12 on Chrome
//The console can be used as an input to help debug the code

// //LET
// let name;
// name = 'John';
// console.log(name);

// //VAR

// var otherName;
// otherName = "Kike";
// console.log(otherName);

//CONST
//Constants can be changed but cannot be reassigned.

// const numbers = [1,2,3,4,5];
// numbers.push(6); //Include number 6
// console.log(numbers);
// console.log(typeof numbers)

// numbers = [1,2,3]; // can't do that, numbers is a constant!

//PRIMITIVE DATA TYPES
/*
String
Numbers 
Boolean
Null
Undefined
Symbols(ES6)
*/

//REFERENCE TYPES - Objects
/*
Arrays
Object Literals
Functions
Dates
Anything else...
*/

//NaN is a value, means "not a number" and is used in case 
//the programmer tries to convert a certain type into a number 
//such as a string.

//JavaScript is dynamically typed but there are supersets that may 
//allow static typing such as Flow and Typescript

//To get an undefined variable error the undefined variable must
//have been declared as a constant! 

//Math Object
// let val;

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.random();

// console.log(val);

//FUNCTIONS

//FUNCTION DECLARATIONS

// function greetings( firstName = 'John', lastName = 'Doe'){
//     //how to set default response in ES5
//     /*
//     if(typeof firstName === 'undefined'){
//       firstName = 'John';
//     }
//     if(typeof lastName === 'undefined'){
//       lastName = 'Doe';
//     }
//     */
    
//     return ('Hello ' + firstName + ' ' + lastName);
//   }
  
//    //console.log(greetings());
   
//    //FUNCTION EXPRESSIONS
   
   
//    //The square function is declared in such way that it is considered
//    //an anonymous function, this function does not have a name.
//    const square = function(x = 0){
//      return x*x;
//    };
//    // The semicolon is necessary because square is a variable."x = 10;" would be a good analogy
   
//    //IMMIDIATLY INVOCABLE FUNCTION'S EXPRESSIONS - IIFE's
   
//    (function(){
//      console.log('this is an IIFEs');
//    })();

// (function(name){
//        console.log('Hello ' + name);
// })('Henrique');

// const todo = {
//        add: function(){
//            console.log('Add todo ...');
//        },
//        edit: function(){
//            console.log('this is another function');
//        }

//     }

// todo.add();
// todo.edit();
// todo.delete = function(){
//     console.log('This is another function declaration test!');
// }

// todo.delete();

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('This is the loop number 2!');
        continue;
    }

    if(i === 8){
        console.log('GET TO THE CHOPPA!');
        break;
    }

    console.log('number ' + i);
}
   









