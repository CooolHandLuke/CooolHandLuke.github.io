/*FUNCTIONS 
     - functions are modular code organized into blocks or "chunks" that we can
 *    reuse.
 */
 
 /** - Think of functions as machines that take data we call parameters into them,
 *    and return an output
 */

/** - first we must define the function. Think of this as if we're building a machine.
 *    We're telling javascript what this function will do when called upon, but not
 *    actually using it. Think of it as writing down the steps to a recipe, but not 
 *    taking the ingredients and cooking the food.
 *  - the function code are the steps to the recipe, and the parmeters are the ingredients.
 * 
 * -we can declare a function with the keyword ‘function’ followed by the function name() {}.
 * -we can also create a function expression, where we set a variable the value of an anonomys function.
 * 
 * -FUNCTION SCOPE: Functions also create their own scope, meaning that variables that have been declared inside 
 *  the function are not accessible outside the function. If there are nested functions inside of a function, the parent
 *  function can share the variables declared in its scope with the functions inside of it, but those functions can not share
 *  variables declared inside of them with the parent, or any functions outside of it's scope.
 * 
 * -HOISTING: This is JavaScript's default behavior of moving variables and function DECLARATIONS to the top of thier scope BEFORE exection of the code.
 *  This means that they are moved to the top of their scope no matter where the are declared in your code, making it important do delcare variables at the top 
 *  of your code, before they are used. When you declare a function, that entire functions code is hoisted to the top of the code block. If you use a variable in the 
 *  function that was not declared and intialized before the code calls the function, the code will not run as expected.
 */

/** 
 * - functions can also be assigned to a variable.
 */
function addOne(num) { //function delcaration
    return num + 1;         //body of the function num++ is the same as num + 1
} 
var plusOneVariable = addOne(5); //declaring a variable assigned to addOne function

console.log(plusOneVariable); //logs 6


//  let's say we have a function called mysteryRecipe. 

//  It takes 3 parameters and we can call these whatever we want as they're not actually    
//  going to be used in the function when called. These parameters will be replaced
//  with arguments we use when we call the function.

let dryGood = "flour";
let largeEggs = "eggs";
let salt = "salt";
let unsaltedButter = "butter";
let sugar = "sugar";

function mysteryRecipe(ingred1, ingred2, ingred3) {
  if(ingred1 === "flour" && ingred2 === "salt" && ingred3 === "eggs") {
    console.log("You made pasta!");
  } else if(ingred1 === "butter" && ingred2 === "sugar" && ingred3 === "flour") {
    console.log("You made a cake!");
  } else {
    console.log("You're a shoe maker!");
  }
}

/**
 * Here is a similar function, but created using a function expression by assigned the variable curiousRecipe to a function.
*/

const curiousRecipe = function(ingred1, ingred2, ingred3) {
  if(ingred1 === "flour" && ingred2 === "salt" && ingred3 === "eggs") {
    console.log("You made pasta!");
  } else if(ingred1 === "butter" && ingred2 === "sugar" && ingred3 === "flour") {
    console.log("You made a cake!");
  } else {
    console.log("You're a shoe maker!");
  }
};

console.log(mysteryRecipe(dryGood, salt, largeEggs));

console.log(mysteryRecipe(unsaltedButter, sugar, dryGood));

console.log(mysteryRecipe(unsaltedButter, salt, sugar));