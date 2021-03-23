/**-LOOPS
*-loops allows us to repeat code until a certain condition is met.
*-There are many types: for loop, while loop, for...of and for...in loops.
*
* -a for loop takes an initial expression, then sets a condition for the initial expression to be compared to, then provides an increment expression if the condition is not met. Then it starts over with the new incremented expression and repeats until the condition is met. A real world example would be summing up a series of numbers. You enter the first number into a calculator; are there more numbers? Yes! Add the second number and add them together. Now take your new total and add the next number, continuing this until there are no more numbers to add. Now the loop is finished!
*
* -a while loop continues until its test condition is met. Think of while loops like when you’re playing a game. While your character is level 5, they can only do 10 damage, or when watching netflix and videos continue to play one after another  WHILE you don’t press pause.
*
* -a for...of is used to loop over objects or strings. Think of an advent calendar with candy inside. The first day you grab the day one candy, the second you grab the day two candy, and so on until the box is empty!
*
* -for…in lets us loop over the keys in an object. Imagine the object as a large box named Sewing Box. Inside this box we have several smaller boxes with the name of different sewing implements, and inside of each there’s an item. We can grab these smaller boxes with a for…in loop
*/

var array = ['yer', 'a', 'wizard', 'Harry']; 

var obj = {
    wizard: "Harry",
    squib: "Argus",
    giant: "Hagrid"
};

var i=0;

for(var i = 0; i < array.length; i++) { //a for loop that cycles foward through each index of array and stops when it reaches the end
  console.log(array[i]); //logs each index of the array. logs 'yer' 'a' 'wizard' 'harry'
}

for(var j = array.length - 1; j >= 0; j--) { //a for loop that cycles backwards through each index of array and stops when it reaches the begining
    console.log(array[j]); //logs each index of the array. logs 'harry' 'wizard' 'a' 'yer'
}

for(var key in obj) {  //loops through an objects pproperties
    console.log(obj[key]); //logs each value of obj.  logs 'Harry', 'Argus', 'Hagrid'
}



while (i < 10) {  //while loop that will start at i, and with each loop, log i + 1. logs the number 1-9
	console.log(i);
	i++;
}
