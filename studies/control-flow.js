/**CONTROL FLOW
*-control flow is order that the instructions and statements in the code are executed.
* 
*-There are many control structures, like functions, loops and conditionals.  
* 
*-These statements take values and moves them through a block of code which directs what happens and dictates the outcome.
* 
*-a good example of control flow is and if/else-if statement.  Beginning with the first if statement, 
*   and it evaluates to true, the flow stops and returns.  If false, it moves on to be evaluated by the else if statement, 
*   and stops if true, and continues if false, and moves to the next if/else. If none of them are true you move to an 
*   else statement and end the code block.
*
* 
* Think of it as going to the grocery store to look for coffee. You look down the first aisle (if) and continue 
*   down each aisle in trun (else/if) if it’s not there. If there is no coffee (else) you leave the store under-caffienated 
*/


var aisleOne = "Produce";
var aisleTwo = "Baking";
var aisleThree = "Pet Food";
var aisleFour = "coffee";

function findCoffee(aisle) { //declare a function that takes one parameter, a string
if("Baking" === aisle) { //an if statement that checks if the string argument is true, if it is, return "Nope!"
    console.log("Nope!");
} else if(aisle === "Produce") { //our first else if statement. If the first if statement is false, we move to this. 
    console.log("I don't want lettuce");
} else if(aisle === "Pet Food") {
    console.log("This isn't Grey Gardens!"); //if the previous two statements are false, the string is now tested here
} else if(aisle === "coffee") {
    console.log("Praise Hecate!"); //Are the last three statements false? Then we test here
} else {
    console.log("Let's go to CC's?");  //Did all of the statements return false? If so, this is our catch-all
}
      
  }
findCoffee(aisleThree); //logs "This isn't Grey Gardens!"
findCoffee(aisleFour); //logs "Praise Hecate!"
findCoffee(aisleOne); // logs "I don't want lettuce"
findCoffee(aisleTwo); // logs  "Baking"

switch(aisleFour){ //This is a switch statement. These use several cases that test against the input, and once found, it "breaks" from the flow.
    case "Baking": //tests to see if aisleFour is equal to baking and returns "Nope!" if True
        console.log("Nope!");
        break;//we stop if the statement was true
    case "Produce": //otherwise, continue to the next statement
        console.log("I don't want lettuce");
        break;
    case "Pet Food"://false again, go to next statement
        console.log("This isn't Grey Gardens");
        break;
    case "coffee"://now we log "Praise Hecate" because aisleFour contains the string "coffee", so this switch statement is true!
        console.log("Praise Hecate")
        break;
    default: //if none of the preceeding statements were true, we log "Let's go to CC's"
        console.log("Let's go to CC's?");
}