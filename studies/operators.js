/*OPERATORS
*-arithmetic operators
*-comparison operators
*-logical operators
*-assignment operators
*/

/*-ARITHMETIC OPERATORS: addition, subtraction, multiplication, division, modulus, increment and decrement. 
*-We use these to output a value from two numbers.  When variables are assigned numbers, they can also use these operators.  Strings can use the addition operator as well
*/
var addTwoNumbers = 8 + 2 //returns 10
var subtractTwoNumbers = 8 - 2 //return 6
var multiplyTwoNumbers = 8 * 2 //returns 16
var dividetwoNumbers = 8 / 2 //returns 4
var remainderOfTwo = 8 % 2 //returns zero. the modulus tests how many times the second number divides into the first and returns what is left

/*-COMPARISON OPERATORS: equal to (==),strictly equal to(===) not equal to(!==), greater than(>), less than(<), greater than or equal(>=) to and less than or equal to(<=)
*-We use these to compare values, and they return TRUE or FALSE
*/
var isEqualTest = 8 === 2 //false
var notEqualTest = 8 !== 2 //true
var greaterThan = 8 > 2   //true
var lessThan = 8 < 2   //false

/*-LOGICAL OPERATORS: compare values and return weather they are both TRUE(&&), if ONE of them is TRUE(||) or if neither is TRUE (!)
*/
 if(8 && 8 == '8') {  //returns true because we used ==. Javascript will convert the string '8' into the number 8. 
    console.log(8);
}
 

/*-ASSIGNMENT OPERATORS: such as the equal sign assign the value on the the right of the operator to to the left.  They can also be used as shorthand for arithmetic operators such as a+=b would be a = a + b.
*/
var oldVariable = "hello";
var newVariable = oldVariable; //newVariable now has been assigned a copied value of oldVariable, and is now assigned "hello"

/*UNARY OPERATORS: operators that only have one side. They take one value and one operand
*/
var firstVariable = 8;
firstVariable++;
console.log(firstVariable); 
/*firstVariable is now 9, as firstVariable++ is the same as saying
*firstVariable + 1
*/

/*Ternary operators take an if/else statement and turn it into a single line of code. 
*   They are called this because they are three pieces. 
*   They only work with yes or no (true or false) conditions, not a statement with multiple possible outcomes
*/

//example of usual if/else statement
var val = 8;
if(val ===  8) { //checks if val is strictly equal to 8
    console.log('hello'); //if true, logs the string 'hello'
} else {
    console.log('goodbye'); //if false, logs the string 'goodbye'
}
val === 8 ? console.log('hello') : console.log('goodbye'); //has the same output, but on one line!