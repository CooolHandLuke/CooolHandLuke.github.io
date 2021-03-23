/*
*DATATYPES:
* Data Types are how we categorize different types of data in JavaScript. There are two types, simple and complex.
*
*SIMPLE DATA TYPES
*There are 6 simple data types:
*/

/*
* -NUMBER: numerical values
*/ 1, 2, 3, 4, 5

/* -STRING: a collection of characters which can be letters, numbers or symbols 
*          between “quotes” Strings can be a single character or an entire sentence.
*/ var howLong = "It's been 84 years"

/*-BOOLEAN: Hold the value of either true of false
*/  var veryLongTime = true
    var itWasYesterday = false

/*-NOT A NUMBER: This indicates that a value is not a number. 
*               An example would be if you tried to add the number 10 to ‘undefined’. 
*               This would return NaN as you can not add these two together and they will not return a number.
*/ var nopeItsNot = 8 + "hello"

/*-UNDEFINED:  an undefined value. Imagine writing a name on an empty box (the variable) but not placing anything inside (the value).
*/ var noValueSet;  //variable is created, but no value is assigned, if called upon, will return undefined


/*-NULL: none, the absence of value. You can assign null to a variable to denote that currently that variable does not have any value but it will have later on. A null means absence of a value.
*/ var valueIsOut = null;

/*-these data types are immutable, which means they don’t hold, collect or aggregate other values, 
*  and operations on simple values returns a NEW simple value, it doesn’t alter the original value.
*/


/*COMPLEX DATA TYPES
*Complex data types aggregate and hold other values.
*
/*-ARRAYS: collection of values that are ordered.  Think of a pill box with slots for every day of the week, 
*    and you can place pills into each day. Now imagine that each slot has a number, and the pills are data 
*    that we place into the slot. You create an with square brackets. Inside these square brackets you place your values, separated by commas.
*/ var myArray = [12, "Hello", "how", "are", "you"];

/*-OBJECTS: Objects take related data and place them in a collection! Think of them like a blob with pairs of information. 
*           Unlike arrays, the pairs don’t need a specific order to be called upon. AN object is a container that holds information in pairs.
*           -They’re organized into “properties” which are ‘key/value’ pairs. Instead of using a numbered index like in an array, we access the value in 
*           an array with custom keys. Think of it like a dictionary. The key is the word you’re looking up, and the value is the definition of that word.
*/ var myObject = {
    firstName: "Luke",
    lastName: "Johnson",
    yearBorn: 1986
}
/*-FUNCTIONS
*-functions are a chunk of code that is reusable and can be called upon at a later point. Think of functions as a machine.
*-you declare a function with the keyword ‘function’ followed by the function name() {}.  
*-we place the code we want the function to execute between the parentheses and the curly brackets. 
*-we can list parameters inside of the parentheses.  When you call upon the function you replace the parameter with values called arguments, which are then used in the function machine.
*-when you call the function you must use the () in order for it to run.
*/ 

var numOne = 8;
//declare a variable messageOne
var numTwo = 10;
//declare a variable messageTwo

function myFunction(parameter1, parameter2) {
//declare a function with the parameters parameter1 and parameter2
    return parameter1 + parameter2;
//return the parameters added together
}
console.log(myFunction(numOne, numTwo));
//logs 18

/*-INFINITY AND NEGATIVE INFINITY
*-In Javascript, infinity is used as the highest number possible, rather than strictly an infinite number.
*-Negative Infinity is used to represent the absolute lowest number available.
*/  

/*-COPY BY VALUE VS COPY BY REFERENCE
* -primitive simple data types are copied by VALUE, meaning that even if you assign a variable to the data in another variable,
*  it will still create a new piece of data in the computers memory, it does not point to the same spot in memory as variable it was assigned to.
*
*-objects and arrays use copy by REFERENCE, meaning that when you assign an array or object that has already been declared by another variable
* to a new variable, it will then link to the orginal point in memory, instead of creating a new space in memory.
*/