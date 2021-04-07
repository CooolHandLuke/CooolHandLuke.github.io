/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
*
*
* 1. To create a variable we use the keyword, var, let or const followed by a name (id or alias) for our
* variable. 
*   -VAR has a global scope, meaning it can be accessed by any code blocks it is outside of, though if declared
*       inside a code block, it is only available there. var can aslo be re-declared. It can be delcared without a value.
*   -LET variables can be reassigned, but they can not be re-declared like var. Let variables can be declared without a value as well.
*   -CONST variables cannot be reassigned or re-declared. Const variables cannot be declared without a value. 
*
*
*
*2. Variables are hoisted in a specific way. Hoisting is the term used to describe in what order code is ran. 
* After being declared and assigned in Javascript, variables are called upon when code is ran. The variable names
* is called before there actual values, and only after that are they assigned their values. Variables delcared with var
* intialize in code with a value of undefined, though let and const variables are not intialized.
*
* 3. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

/**
 * HOISTING
 * -Javascript moves all declaration of variables to the top of the current code being ran, 
 *   or to the top of a function code block.
 * 
 * -variables defined with VAR are hoisted to the top and initialized.
 * -Variables defined with LET and CONST are hoisted to the top of the block, but not initialized. This means that the block of code knows of the variable declared with LET and CONST, 
 *   but it's unavailable until it has been declared later in ther code.
 */


// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable declared with var - we cannot do this with const //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

