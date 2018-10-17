//FUNCTION DECLARATIONS

function greetings( firstName = 'John', lastName = 'Doe'){
  //how to set default response in ES5
  /*
  if(typeof firstName === 'undefined'){
    firstName = 'John';
  }
  if(typeof lastName === 'undefined'){
    lastName = 'Doe';
  }
  */
  
  return ('Hello ' + firstName + ' ' + lastName);
}

 //console.log(greetings());
 
 //FUNCTION EXPRESSIONS
 
 
 //The square function is declared in such way that it is considered
 //an anonymous function, this function does not have a name.
 const square = function(x = 0){
   return x*x;
 };
 // The semicolon is necessary because square is a variable."x = 10;" would be a good analogy
 
 //IMMIDIATLY INVOCABLE FUNCTION'S EXPRESSIONS - IIFE's
 
 (function(){
   console.log('this is an IIFEs');
 })();
 
 